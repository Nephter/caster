import React, { useState, useEffect } from 'react';

const useThing = (props) => {
  const [loading, setLoading] = useState(true);
  const [relevantSpellNames, setRelevantSpellNames] = useState(null);
  const [allSpellInfo, setAllSpellInfo] = useState([]);
  const [apiSpellsByLevel, setApiSpellsByLevel] = useState([]);
  const [apiSpellsByClass, setApiSpellsByClass] = useState([
    { index: '', name: '', url: '' },
  ]);

  // API call for spells
  useEffect(() => {
    console.log('1');
    // returns all cleric spells
    const clericSpellsUrl = `https://www.dnd5eapi.co/api/classes/cleric/spells`;
    let json;
    const fetchData1 = async () => {
      try {
        const response = await fetch(clericSpellsUrl);
        json = await response.json();
      } catch (error) {
        console.log('error', error);
      }
      setApiSpellsByClass(json.results);
      console.log('all cleric spells');
      console.log(json);
    };
    fetchData1();

    //returns all D&D spells of input level and each previous level down to 1
    let json2;
    const fetchData2 = async () => {
      let i;
      let spellsByLevelUrl;
      const levelArray = [];
      for (i = 1; i < +9 + 1; i++) {
        spellsByLevelUrl = `https://www.dnd5eapi.co/api/spells?level=${i}`;
        try {
          const response = await fetch(spellsByLevelUrl);
          json2 = await response.json();
          levelArray[i - 1] = json2;
        } catch (error) {
          console.log('error', error);
        }
      }
      return levelArray;
    };
    fetchData2().then((e) => {
      setApiSpellsByLevel(e);
    });
  }, []);

  // makes sure API calls run in correct order
  useEffect(() => {
    console.log('2');
    listOfRelevantSpellNames();
  }, [apiSpellsByClass]);

  // compares all cleric spells with all D&D spells available up to your level
  const listOfRelevantSpellNames = () => {
    console.log('3');
    if (loading === false) {
      var spellIndexesByLevel = apiSpellsByLevel.map((a) => {
        return a.results.map((b) => {
          return b.index;
        });
      });
      var spellIndexesByClass = apiSpellsByClass.map((c) => {
        return c.index;
      });
      let relevantSpellNames = [];
      console.log(spellIndexesByLevel);
      spellIndexesByLevel.map((s) => {
        s.map((m) => {
          if (spellIndexesByClass.includes(m) === true) {
            relevantSpellNames.push(m);
          }
        });
        return s;
      });
      setRelevantSpellNames(relevantSpellNames);
    }
    setLoading(false);
  };

  return [apiSpellsByLevel, relevantSpellNames, loading, setLoading];
};

export default useThing;
