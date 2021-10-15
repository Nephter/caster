import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import Login from './Components/Login';
import App from './App';
import { spellSlotsByLevel } from './Variables/SpellSlotChart';

// if app is loading have a d20 instead of "loading..."

// on render i want all the dnd spells as well as all of their information(casting time, duration, etc)
// on submit. ill take the arrays of spell information based on character level and hydrate the table

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [spellsPreparable, setSpellsPreparable] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(0);
  const [modifier, setModifier] = useState(1);
  const [spellSlots, setSpellSlots] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allSpellsApi, setAllSpellsApi] = useState([]);
  const [api, setApi] = useState({ index: '', name: '', url: '' });

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
      return spellDataJson;
    };

    fetchJson();
  }, []);

  // returns all DND spells
  const fetchAllSpellNames = async () => {
    let json;
    let url;
    url = 'https://www.dnd5eapi.co/api/spells';
    try {
      const response = await fetch(url);
      json = await response.json();
    } catch (error) {
      console.log('error', error);
    }
    var allSpellNames = json.results.map((c) => {
      return c.index;
    });
    return allSpellNames;
  };

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

  // returns arrays of cleric spells by level
  const levelArray = [];
  const fetchSpellsByInputLevel = async (characterLevel) => {
    let json;
    let i;
    let spellsByLevelUrl;
    for (i = 1; i < +9 + 1; i++) {
      spellsByLevelUrl = `https://www.dnd5eapi.co/api/classes/cleric/levels/${i}/spells`;
      try {
        const response = await fetch(spellsByLevelUrl);
        json = await response.json();
        levelArray[i - 1] = json.results;
      } catch (error) {
        console.log('error', error);
      }
    }
    return levelArray;
  };

  useEffect(() => {
    loading &&
      fetchAllSpellNames().then((allSpellNames) => {
        setAllSpellsApi(allSpellNames);
        // fetchEverySpellsData(e);
        fetchSpellsByInputLevel(allSpellNames).then((spellsByInputLevel) => {
          setApi(spellsByInputLevel);
          console.log(spellsByInputLevel);
        });
      });
  }, [loading]);

  // useEffect(() => {
  //   setLoading(false);
  // }, [api]);

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
