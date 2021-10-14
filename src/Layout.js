import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import Login from './Components/Login';
import App from './App';
import { spellSlotsByLevel } from './Variables/SpellSlotChart';

// if app is loading have a d20 instead of "loading..."

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [spellsPreparable, setSpellsPreparable] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(0);
  const [modifier, setModifier] = useState(1);
  const [spellSlots, setSpellSlots] = useState(null);
  const [loading, setLoading] = useState(true);

  const [allSpellsApi, setAllSpellsApi] = useState([]);
  const [api, setApi] = useState({ index: '', name: '', url: '' });

  useEffect(() => {
    const fetchAllSpellsData = async () => {
      let json;
      let url;
      url = 'https://www.dnd5eapi.co/api/spells';
      try {
        const response = await fetch(url);
        json = await response.json();
      } catch (error) {
        console.log('error', error);
      }
      setAllSpellsApi(json.results);
      return json.results;
    };

    const spellDataByName = async (e) => {
      let json;
      let url;
      let i;
      console.log(e);
      for (i = 0; i < e.length; i++) {
        url = `https://www.dnd5eapi.co/api/spells${i}`;
        try {
          const response = await fetch(url);
          json = await response.json();
        } catch (error) {
          console.log('error', error);
        }
      }
      setAllSpellsApi(json.results);
      return json.results;
    };

    fetchAllSpellsData().then((e) => {
      spellDataByName(e);
    });
  }, [loading]);

  const levelArray = [];
  useEffect(() => {
    let json;
    let i;
    let spellsByLevelUrl;
    const fetchData2 = async () => {
      for (i = 1; i < +9 + 1; i++) {
        spellsByLevelUrl = `https://www.dnd5eapi.co/api/classes/cleric/levels/${i}/spells`;
        try {
          const response = await fetch(spellsByLevelUrl);
          json = await response.json();
          levelArray[i - 1] = json;
        } catch (error) {
          console.log('error', error);
        }
      }
      // console.log(levelArray);
      setApi(levelArray);
      return levelArray;
    };
    fetchData2().then((e) => {
      // console.log(e);
      setApi(e);
    });
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [setApi]);

  // const [apiSpellsByLevel, relevantSpellNames, loading, setLoading] =
  //   useThing(playerLevel);

  // useEffect(() => {
  //   console.log(apiSpellsByLevel);
  //   apiSpellsByLevel[0].results[0] &&
  //     console.log(apiSpellsByLevel[0].results[0]);
  //   let i;
  //   for (i = 0; i < apiSpellsByLevel.length; i++) {}
  // }, [loading]);

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
            playerLevel={playerLevel}
            setPlayerLevel={setPlayerLevel}
          />
        )}
      </Container>
    </div>
  );
};

export default Layout;

// useEffect(() => {
//   const fetchAllSpellsData = async () => {
//     let json;
//     let url;
//     url = 'https://www.dnd5eapi.co/api/spells';
//     try {
//       const response = await fetch(url);
//       json = await response.json();
//     } catch (error) {
//       console.log('error', error);
//     }
//     setAllSpellsApi(json.results);
//     return json.results;
//   };

//   const spellDataByName = async (e) => {
//     let json;
//     let url;
//     let i;
//     console.log(e);
//     for (i = 0; i < e.length; i++) {
//       url = `https://www.dnd5eapi.co/api/spells${i}`;
//       try {
//         const response = await fetch(url);
//         json = await response.json();
//       } catch (error) {
//         console.log('error', error);
//       }
//     }
//     setAllSpellsApi(json.results);
//     return json.results;
//   };

//   fetchAllSpellsData().then((e) => {
//     spellDataByName(e);
//   });
// }, [loading]);
