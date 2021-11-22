import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import Login from './Components/Login';
import App from './App';
import { spellSlotsByLevel } from './Variables/SpellSlotChart';
import tableTop from './assets/img/theme/tabletop3.jpg';
import clericMace from './assets/img/ClericMace.svg';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { baseThemeOptions } from './base-theme-options.js';
import { lightThemeOptions } from './light-theme-options.js';

const theme = createTheme(baseThemeOptions, lightThemeOptions);

// if app is loading have a d20 instead of "loading..."
// set woodgrain tableTop size smaller so I dont feel like my head is right above the table

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [spellsPreparable, setSpellsPreparable] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(0);
  const [modifier, setModifier] = useState(0);
  const [spellSlots, setSpellSlots] = useState(null);
  const [preservedSpellSlots, setPreservedSpellSlots] = useState(null);
  const [loading, setLoading] = useState(true);
  const [spellsByLevel, setSpellsByLevel] = useState([]);
  const [channelDivinity, setChannelDivinity] = useState([]);
  const [cDCasts, setCDCasts] = useState(null);
  const [domain, setDomain] = useState([]);
  const [longRestCD, setLongRestCD] = useState(null);
  const [domainIcon, setDomainIcon] = useState(
    <img className="classSymbol" src={clericMace} alt="." />
  );

  let ChannelDivinityCasts;
  switch (playerLevel) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      ChannelDivinityCasts = '1';
      break;
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case '11':
    case '12':
    case '13':
    case '14':
    case '15':
    case '16':
    case '17':
      ChannelDivinityCasts = '2';
      break;
    case '18':
    case '19':
    case '20':
      ChannelDivinityCasts = '3';
      break;
    default:
  }

  let spellLevel;
  switch (playerLevel) {
    case '1':
    case '2':
      spellLevel = '1';
      break;
    case '3':
    case '4':
      spellLevel = '2';
      break;
    case '5':
    case '6':
      spellLevel = '3';
      break;
    case '7':
    case '8':
      spellLevel = '4';
      break;
    case '9':
    case '10':
      spellLevel = '5';
      break;
    case '11':
    case '12':
      spellLevel = '6';
      break;
    case '13':
    case '14':
      spellLevel = '7';
      break;
    case '15':
    case '16':
      spellLevel = '8';
      break;
    case '17':
    case '18':
    case '19':
    case '20':
      spellLevel = '9';
      break;
    default:
  }

  useEffect(() => {
    setCDCasts(+ChannelDivinityCasts);
    setLongRestCD(+ChannelDivinityCasts);
  }, [playerLevel]);

  const useChannelDivinity = () => {
    let newCDValue = +cDCasts;
    newCDValue = newCDValue - 1;
    setCDCasts(newCDValue);
  };

  // add channel divinity spells by character level to be added to final page
  useEffect(() => {
    var channelDivinityArray = [];
    const channelDivinitySpellsByLevel = () => {
      for (let i = 0; i < channelDivinity.length; i++) {
        if (channelDivinity[i].level <= playerLevel) {
          channelDivinityArray.push(channelDivinity[i]);
        }
      }
      return channelDivinityArray;
    };
    channelDivinitySpellsByLevel();
    setChannelDivinity(channelDivinityArray);
  }, [loggedIn]);

  // add domain spells by character level to be added to final page
  useEffect(() => {
    var domainSpellsArray = [];
    const domainSpellsByLevel = () => {
      let domainSpellGroup;
      switch (spellLevel) {
        case '1':
          domainSpellGroup = '1';
          break;
        case '2':
          domainSpellGroup = '2';
          break;
        case '3':
          domainSpellGroup = '3';
          break;
        case '4':
          domainSpellGroup = '4';
          break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          domainSpellGroup = '5';
          break;
        default:
      }
      for (let i = 0; i < domainSpellGroup; i++) {
        domainSpellsArray.push(domain[+i + 1]);
      }
      domainSpellsArray = [].concat.apply([], domainSpellsArray);
      return domainSpellsArray;
    };
    domainSpellsByLevel();
    setDomain(domainSpellsArray);
  }, [domainIcon]);

  // fetch spell data by character level
  let spellDataJson;
  useEffect(() => {
    const fetchJson = async () => {
      let url;
      url = './AllClericSpellsData.json';
      try {
        const response = await fetch(url);
        spellDataJson = await response.json();
      } catch (error) {
        console.log('error', error);
      }

      var finalArray = [];
      const bigArray = () => {
        for (let i = 0; i < spellLevel; i++) {
          var levelArray = spellDataJson.filter((spell) => {
            return spell.level === +i + 1;
          });
          finalArray.push(levelArray);
          levelArray = [];
        }
        finalArray = [].concat.apply([], finalArray);
        return finalArray;
      };
      bigArray();
      setSpellsByLevel(finalArray);
    };
    fetchJson();
  }, [playerLevel]);

  // navigates to main page of app only after inputing relevant info
  const onSubmit = () => {
    setLoggedIn(!loggedIn);
    setSpellsPreparable(+playerLevel + +modifier);
    setPlayerLevel(playerLevel);
    setLoading(!loggedIn);
  };

  // sets spell slots based on players level and modifier
  useEffect(() => {
    setSpellSlots(spellSlotsByLevel[playerLevel - 1]);
  }, [playerLevel]);

  // sets the value of spells preparable based on checkbox status
  const onCheckboxHandler = (count) => {
    setSpellsPreparable(+spellsPreparable + count);
  };

  // based on spell level cast, subtracts 1 from the corresponding spell slots total
  const onDropdownClick = (spellLevel) => {
    let newSpellSlotsValues = [...spellSlots];
    newSpellSlotsValues[spellLevel] = newSpellSlotsValues[spellLevel] - 1;
    setSpellSlots(newSpellSlotsValues);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${tableTop})`,
          height: '100vh',
          overflow: 'hidden',
          backgroundSize: '50% auto',
          zIndex: '-500',
        }}
      >
        <Container className="d-flex justify-content-center">
          {!loggedIn ? (
            <Login
              onSubmit={onSubmit}
              playerLevel={playerLevel}
              setPlayerLevel={setPlayerLevel}
              modifier={modifier}
              setModifier={setModifier}
              setDomain={setDomain}
              domainIcon={domainIcon}
              setDomainIcon={setDomainIcon}
              channelDivinity={channelDivinity}
              setChannelDivinity={setChannelDivinity}
            />
          ) : !loading ? (
            'Loading...'
          ) : (
            <App
              spellSlots={spellSlots}
              setSpellSlots={setSpellSlots}
              spellsPreparable={spellsPreparable}
              setSpellsPreparable={setSpellsPreparable}
              spellsByLevel={spellsByLevel}
              playerLevel={playerLevel}
              modifier={modifier}
              domain={domain}
              domainIcon={domainIcon}
              channelDivinity={channelDivinity}
              cDCasts={cDCasts}
              setCDCasts={setCDCasts}
              useChannelDivinity={useChannelDivinity}
              longRestCD={longRestCD}
              preservedSpellSlots={preservedSpellSlots}
              setPreservedSpellSlots={setPreservedSpellSlots}
              onDropdownClick={onDropdownClick}
              onCheckboxHandler={onCheckboxHandler}
              ChannelDivinityCasts={ChannelDivinityCasts}
            />
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

// // fetch all spell data INFO
// let spellDataJson;
// useEffect(() => {
//   const fetchJson = async () => {
//     let url;
//     url = './AllSpellsData.json';
//     try {
//       const response = await fetch(url);
//       spellDataJson = await response.json();
//     } catch (error) {
//       console.log('error', error);
//     }

//     var newArray = spellDataJson.filter((sl) => {
//       let thing = sl.classes.filter((sub) => {
//         return sub.name === 'Cleric';
//       });
//       return thing.length > 0 ? thing : '';
//     });
//     // const finalArray = () => {
//     //   var bigArray = [];
//     //   for (let i = 1; i < 10; i++) {
//     //     var levelArray = spellDataJson.filter((sl) => {
//     //       return sl.level === i;
//     //     });
//     //     bigArray.push(levelArray);
//     //     levelArray = [];
//     //   }
//     //   return bigArray;
//     // };
//     // console.log(finalArray());
//     // console.log(newArray);
//     setAllSpellData(newArray);
//     console.log(newArray);
//     return spellDataJson;
//   };
//   fetchJson();
// }, []);

// const spellDataArray = [];
// const fetchEverySpellsData = async (listOfSpellNames) => {
//   let json;
//   let url;
//   let i;
//   // for (i = 0; i < listOfSpellNames.length; i++) {
//   for (i = 0; i < 4; i++) {
//     url = `https://www.dnd5eapi.co/api/spells/${listOfSpellNames[i]}`;
//     try {
//       const response = await fetch(url);
//       json = await response.json();
//     } catch (error) {
//       console.log('error', error);
//     }
//     spellDataArray.push(json);
//   }
//   console.log(spellDataArray);
// };
