import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import Login from './Components/Login';
import App from './App';
import { spellSlotsByLevel } from './Variables/SpellSlotChart';

// if app is loading have a d20 instead of "loading..."

// on submit. ill take the arrays of spell information based on character level and hydrate the table

// take spellDataJson and filter it by spell's index of spellByLevel

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [spellsPreparable, setSpellsPreparable] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(0);
  const [modifier, setModifier] = useState(1);
  const [spellSlots, setSpellSlots] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allSpellData, setAllSpellData] = useState([]);
  const [spellsByLevel, setSpellsByLevel] = useState({
    index: '',
    name: '',
    url: '',
  });

  // fetch all spell data INFO
  let spellDataJson;
  useEffect(() => {
    const fetchJson = async () => {
      let url;
      url = './AllSpellsData.json';
      try {
        const response = await fetch(url);
        spellDataJson = await response.json();
      } catch (error) {
        console.log('error', error);
      }
      console.log(spellDataJson);

      var newArray = spellDataJson.filter((sl) => {
        let thing = sl.classes.filter((sub) => {
          return sub.name === 'Cleric';
        });
        return thing.length > 0 ? thing : '';
      });

      const finalArray = () => {
        var bigArray = [];
        for (let i = 1; i < 10; i++) {
          var levelArray = spellDataJson.filter((sl) => {
            return sl.level === i;
          });
          bigArray.push(levelArray);
          levelArray = [];
        }
        return bigArray;
      };
      // console.log(finalArray());
      // console.log(newArray);
      setAllSpellData(newArray);
      return spellDataJson;
    };
    fetchJson();
  }, []);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // sets spell slots based on players level
  useEffect(() => {
    setSpellSlots(spellSlotsByLevel[playerLevel - 1]);
  }, [playerLevel]);

  // sets the value of spells preparable based on checkbox status
  const onCheckboxHandler = (count) => {
    setSpellsPreparable(+spellsPreparable + count);
  };

  // based on spell level cast, subtracts 1 from the corresponding spell slots total
  const onPopoverHandler = (spellLevel) => {
    let newSpellSlotsValues = [...spellSlots];
    newSpellSlotsValues[spellLevel] = newSpellSlotsValues[spellLevel] - 1;
    setSpellSlots(newSpellSlotsValues);
  };

  // navigates to main page of app only after inputing relevant info
  const onSubmit = () => {
    setLoggedIn(!loggedIn);
    setSpellsPreparable(+playerLevel + +modifier);
    setPlayerLevel(playerLevel);
    setLoading(!loggedIn);
  };

  // EXPERIMENT var thing = { logIn: [loggedIn, setLoggedIn] };
  return (
    <div>
      <Container>
        {!loggedIn ? (
          <Login
            onSubmit={onSubmit}
            playerLevel={playerLevel}
            setPlayerLevel={setPlayerLevel}
            modifier={modifier}
            setModifier={setModifier}
            // EXPERIMENT thing={thing}
          />
        ) : !loading ? (
          'Loading...'
        ) : (
          <App
            spellSlots={spellSlots}
            setSpellSlots={setSpellSlots}
            spellsPreparable={spellsPreparable}
            setSpellsPreparable={setSpellsPreparable}
            onPopoverHandler={onPopoverHandler}
            onCheckboxHandler={onCheckboxHandler}
            // playerLevel={playerLevel}
            // setPlayerLevel={setPlayerLevel}
          />
        )}
      </Container>
    </div>
  );
};

export default Layout;

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
