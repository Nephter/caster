import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { spellsListData } from '../Variables/Spells';
import { MyTable } from './MyTable';

const Body = (props) => {
  console.log('body');
  const [loadingTable, setLoadingTable] = useState(false);
  const [apiSpellsByClass, setApiSpellsByClass] = useState([
    { index: '', name: '', url: '' },
  ]);
  const [apiSpellsByLevel, setApiSpellsByLevel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [yourSpells, setYourSpells] = useState(null);

  // API call for spells
  useEffect(() => {
    console.log('1');
    // returns all cleric spells
    const url = `https://www.dnd5eapi.co/api/classes/cleric/spells`;
    let json;
    const fetchData1 = async () => {
      try {
        const response = await fetch(url);
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
      let url2;
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
        url2 = `https://www.dnd5eapi.co/api/spells?level=${i}`;
        try {
          const response = await fetch(url2);
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
  useEffect(() => {
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
      let relevantSpells = [];
      spellIndexesByLevel.map((s) => {
        s.map((m) => {
          if (spellIndexesByClass.includes(m) === true) {
            relevantSpells.push(m);
          }
        });
        return s;
      });
      setYourSpells(relevantSpells);
    }
    console.log('your spells ' + [yourSpells]);
  }, [loading, apiSpellsByLevel]);

  useEffect(() => {
    console.log('3');
    setLoading(false);
  }, [apiSpellsByLevel]);

  console.log(yourSpells);

  // if (yourSpells) {
  //   console.log('set loading table');
  //   setLoadingTable(true);
  // }
  // useEffect(() => {
  //   console.log('4');
  //   console.log(yourSpells);

  //   // let k;
  //   // // for (k = 0; k < yourSpells.length; k++) {
  //   // //   console.log(k);
  //   // // }
  //   // const url = `https://www.dnd5eapi.co/api/spells`;
  //   // let json;
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const response = await fetch(url);
  //   //     json = await response.json();
  //   //   } catch (error) {
  //   //     console.log('error', error);
  //   //   }
  //   //   setApiSpellsByClass(json.results);
  //   // };
  //   // fetchData();
  // }, []);

  // useEffect(() => {
  //   return (
  //     <Container className="my-auto mx-auto">
  //       <Table striped bordered hover className="w-50 my-auto mx-auto">
  //         <thead>
  //           <tr>
  //             <th style={{ width: '25px' }}>Prep</th>
  //             <th>Spell Name:</th>
  //             <th>Details</th>
  //             <th>Cast it!</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {yourSpells.map((spell, index) => {
  //             return (
  //               <MyTable
  //                 index={index}
  //                 {...props}
  //                 spell={spell}
  //                 setLoadingTable={setLoadingTable}
  //                 loadingTable={loadingTable}
  //               />
  //             );
  //           })}
  //         </tbody>
  //       </Table>
  //     </Container>
  //   );
  // }, [yourSpells]);
  const data = spellsListData;
  return (
    <Container className="my-auto mx-auto">
      {yourSpells ? (
        <Table striped bordered hover className="w-50 my-auto mx-auto">
          <thead>
            <tr>
              <th style={{ width: '25px' }}>Prep</th>
              <th>Spell Name:</th>
              <th>Details</th>
              <th>Cast it!</th>
            </tr>
          </thead>
          <tbody>
            {data.map((spell, index) => {
              return (
                <MyTable
                  key={index}
                  {...props}
                  spell={spell}
                  setLoadingTable={setLoadingTable}
                  loadingTable={loadingTable}
                />
              );
            })}
          </tbody>
        </Table>
      ) : (
        'Loading...'
      )}
    </Container>
  );
};

export default Body;
