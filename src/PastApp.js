import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import { Container, Table } from 'react-bootstrap';
import { MyTable } from './Components/MyTable';
import { spellsListData } from './Variables/Spells';

function App(props) {
  console.log('app');
  const [loadingTable, setLoadingTable] = useState(false);
  const [yourSpells, setYourSpells] = useState(null);

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
  // fetchData2().then((e) => {
  //   setApiSpellsByLevel(e);
  // });

  const data = spellsListData;
  return (
    <div className="App">
      <Container>
        <div>
          <Header
            spellsPreparable={props.spellsPreparable}
            setSpellsPreparable={props.setSpellsPreparable}
            spellSlots={props.spellSlots}
            setSpellSlots={props.setSpellSlots}
          />
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
          {/* <Body
            spellSlots={props.spellSlots}
            setSpellSlots={props.setSpellSlots}
            playerLevel={props.playerLevel}
            loggedIn={props.loggedIn}
            yourSpells={yourSpells}
            setYourSpells={setYourSpells}
            onCheckboxHandler={props.onCheckboxHandler}
            onPopoverHandler={props.onPopoverHandler}
          /> */}
        </div>
      </Container>
    </div>
  );
}

export default App;
