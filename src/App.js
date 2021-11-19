import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import TableParchment from './assets/img/TableParchment.svg';
import HeaderChooseSpells from './Components/HeaderChooseSpells';
import TableChooseSpells from './Components/TableChooseSpells';
import TableFinal from './Components/TableFinal';

// set preppared spells state of parent of both components, set = ([]). pass state to both components

//all checkboxes that are selected are used as a reference in final table

// preserve selected spells prepared

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);
  const [longRested, setLongRested] = useState(true);
  const [newSpellPrepped, setNewSpellPrepped] = useState({
    spell: [...props.domain],
  });
  const [numberOfSpellsPreparable, setNumberOfSpellsPreparable] = useState(
    +props.playerLevel + +props.modifier
  );

  const data = props.spellsByLevel;

  useEffect(() => {
    props.setPreservedSpellSlots(props.spellSlots);
  }, []);

  const onPrepareClick = () => {
    setTable(true);
  };

  const onLongRestClick = () => {
    props.setSpellSlots(props.preservedSpellSlots);
    props.setCDCasts(props.longRestCD);
    setLongRested(true);
    setTable(false);
    setNewSpellPrepped({
      spell: [...props.domain],
    });
    props.setSpellsPreparable(numberOfSpellsPreparable);
  };

  return !loadingTable ? (
    'Loading...'
  ) : (
    <div
      // className="mx-auto"
      style={{
        backgroundImage: `url(${TableParchment})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        marginTop: '10vh',
      }}
    >
      {!table ? (
        <div>
          <Card className="b-t">
            <div
              style={{
                height: '165px',
                width: 'inherit',
              }}
            >
              <CardHeader
                className="border-0 b-t pt-5"
                style={{
                  width: 'inherit',
                }}
              >
                <HeaderChooseSpells
                  table={table}
                  onPrepareClick={onPrepareClick}
                  spellsPreparable={props.spellsPreparable}
                  playerLevel={props.playerLevel}
                  modifier={props.modifier}
                />
              </CardHeader>
            </div>
            <CardBody>
              <Table hover borderless>
                <div
                  className="table spellTableBody b-t"
                  style={{ marginTop: '-42px' }}
                >
                  <thead className="thead-light">
                    <tr
                      className="pt-0"
                      style={{
                        backgroundImage: `url(${TableParchment})`,
                      }}
                    >
                      <th
                        className=" tableStickyHead pt-0"
                        style={{ backgroundPosition: '-49px' }}
                      >
                        <h3 className="pl-0 pt-0 ">Prep</h3>
                      </th>
                      <th
                        className=" tableStickyHead pl-0"
                        style={{ backgroundPosition: '-150px' }}
                      >
                        <h3 className="pt-0">Lvl</h3>
                      </th>
                      <th
                        className=" tableStickyHead pt-0"
                        style={{ backgroundPosition: '-185px' }}
                      >
                        <h3 className="pt-0">Name</h3>
                      </th>
                      <th
                        className=" tableStickyHead pt-0"
                        style={{
                          backgroundPosition: '-459px',
                        }}
                      >
                        <h3 className="pt-0">Casting Info</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="invisibleTable-body">
                    <tr className="invisibleTable-row">
                      <td>
                        <h4>.</h4>
                      </td>
                      <td>
                        <h4>.</h4>
                      </td>
                      <td>
                        <h4>
                          ..........................................................................................
                        </h4>
                      </td>
                      <td>
                        <h4>..........</h4>
                      </td>
                    </tr>
                    {data.map((spell, index) => {
                      return (
                        <TableChooseSpells
                          key={index}
                          spell={spell}
                          index={index}
                          newSpellPrepped={newSpellPrepped}
                          setNewSpellPrepped={setNewSpellPrepped}
                          domainIcon={props.domainIcon}
                          spellsPreparable={props.spellsPreparable}
                          setSpellsPreparable={props.setSpellsPreparable}
                          onCheckboxHandler={props.onCheckboxHandler}
                        />
                      );
                    })}
                  </tbody>
                </div>
              </Table>
            </CardBody>
          </Card>
        </div>
      ) : (
        <TableFinal
          longRested={longRested}
          onLongRestClick={onLongRestClick}
          setNewSpellPrepped={setNewSpellPrepped}
          newSpellPrepped={newSpellPrepped}
          spellSlots={props.spellSlots}
          domainIcon={props.domainIcon}
          domain={props.domain}
          channelDivinity={props.channelDivinity}
          useChannelDivinity={props.useChannelDivinity}
          onDropdownClick={props.onDropdownClick}
          cDCasts={props.cDCasts}
          playerLevel={props.playerLevel}
        />
      )}
      <div
        style={{
          position: 'relative',
          bottom: '55%',
          left: '22%',
          opacity: '.15',
          fontSize: '350px',
          zIndex: '1',
          pointerEvents: 'none',
        }}
      >
        {props.domainIcon}{' '}
      </div>
    </div>
  );
}

export default App;
