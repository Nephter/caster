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
    };
    fetchData1();
    //returns all D&D spells of input level and each previous level down to 1
    let json2;
    const fetchData2 = async () => {
      let i;
      let spellsByLevelUrl;
      let num;
      switch (props.playerLevel) {
        case '1':
        case '2':
          num = '1';
          break;
        case '3':
        case '4':
          num = '2';
          break;
        case '5':
        case '6':
          num = '3';
          break;
        case '7':
        case '8':
          num = '4';
          break;
        case '9':
        case '10':
          num = '5';
          break;
        case '11':
        case '12':
          num = '6';
          break;
        case '13':
        case '14':
          num = '7';
          break;
        case '15':
        case '16':
          num = '8';
          break;
        case '17':
        case '18':
        case '19':
        case '20':
          num = '9';
          break;
        default:
      }
      const levelArray = [];
      for (i = 1; i < +num + 1; i++) {
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

  // compares all cleric spells with all D&D spells available up to your level

  const sorter = () => {
    console.log('2');
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
      spellIndexesByLevel.map((s) => {
        s.map((m) => {
          if (spellIndexesByClass.includes(m) === true) {
            relevantSpellNames.push(m);
          }
        });
        return s;
      });
      setRelevantSpellNames(relevantSpellNames);
      console.log(relevantSpellNames);
    }
    console.log('your spells ' + [relevantSpellNames]);
    setLoading(false);
  };

  // makes sure API calls run in correct order
  useEffect(() => {
    console.log('3');
    sorter();
  }, [apiSpellsByLevel]);

  // useEffect(() => {
  //   console.log('4');
  //   console.log(relevantSpellNames);
  //   let k;
  //   let url;
  //   let json;
  //   for (k = 0; k < relevantSpellNames.length; k++) {
  //     console.log(k);
  //     url = `https://www.dnd5eapi.co/api/spells${k}`;
  //   }
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       json = await response.json();
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //     console.log(json);
  //     setAllSpellInfo(json);
  //   };
  //   fetchData();
  // }, []);
  console.log(relevantSpellNames);
  return [apiSpellsByLevel, relevantSpellNames, loading, setLoading];
};

export default useThing;
