import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import { Container, Table } from 'react-bootstrap';
import { MyTable } from './Components/MyTable';
import { spellsListData } from './Variables/Spells';

function App(props) {
  const [loadingTable, setLoadingTable] = useState(false);
  const [spellDataByLevel, setSpellDataByLevel] = useState([]);

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
      // filters by cleric castable spells
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
      console.log(finalArray());
      // console.log(newArray);
      setSpellDataByLevel(newArray);

      // setSpellDataByLevel(spellDataJson);
      return spellDataJson;
    };

    fetchJson();
  }, []);

  const data = spellsListData;
  return (
    <div className="App">
      <Container>
        <div>
          <Header
            spellSlots={props.spellSlots}
            setSpellSlots={props.setSpellSlots}
            spellsPreparable={props.spellsPreparable}
            setSpellsPreparable={props.setSpellsPreparable}
          />
          <Container className="my-auto mx-auto">
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
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default App;

// // compares all cleric spells with all D&D spells available up to your level
// useEffect(() => {
//   if (loading === false) {
//     var spellIndexesByLevel = apiSpellsByLevel.map((a) => {
//       return a.results.map((b) => {
//         return b.index;
//       });
//     });
//     var spellIndexesByClass = apiSpellsByClass.map((c) => {
//       return c.index;
//     });
//     let relevantSpells = [];
//     spellIndexesByLevel.map((s) => {
//       s.map((m) => {
//         if (spellIndexesByClass.includes(m) === true) {
//           relevantSpells.push(m);
//         }
//       });
//       return s;
//     });
//     setYourSpells(relevantSpells);
//   }
// }, [loading, apiSpellsByLevel]);

// useEffect(() => {
//   setLoading(false);
// }, [apiSpellsByLevel]);

// // returns all D&D spells of input level and each previous level down to 1
// const levelArray = [];
// useEffect(() => {
//   let json2;
//   const fetchData2 = async () => {
//     let i;
//     let url2;
//     let num;
//     switch (props.playerLevel) {
//       case '1':
//       case '2':
//         num = '1';
//         break;
//       case '3':
//       case '4':
//         num = '2';
//         break;
//       case '5':
//       case '6':
//         num = '3';
//         break;
//       case '7':
//       case '8':
//         num = '4';
//         break;
//       case '9':
//       case '10':
//         num = '5';
//         break;
//       case '11':
//       case '12':
//         num = '6';
//         break;
//       case '13':
//       case '14':
//         num = '7';
//         break;
//       case '15':
//       case '16':
//         num = '8';
//         break;
//       case '17':
//       case '18':
//       case '19':
//       case '20':
//         num = '9';
//         break;
//       default:
//     }
//     for (i = 1; i < +num + 1; i++) {
//       url2 = `https://www.dnd5eapi.co/api/spells?level=${i}`;
//       try {
//         const response = await fetch(url2);
//         json2 = await response.json();
//         levelArray[i - 1] = json2;
//       } catch (error) {
//         console.log('error', error);
//       }
//     }
//     return levelArray;
//   };
//   fetchData2().then((e) => {
//     setApiSpellsByLevel(e);
//   });
// }, []);

// console.log(levelArray);
