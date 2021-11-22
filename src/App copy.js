import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import BackgroundTable from './assets/img/BackgroundTable.svg';
import HeaderChooseSpells from './Components/HeaderChooseSpells';
import TableChooseSpells from './Components/TableChooseSpells';
import TableFinal from './Components/TableFinal';

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

  // resets PreservedSpellSlots to spellSlots
  useEffect(() => {
    props.setPreservedSpellSlots(props.spellSlots);
  }, []);

  // changes view to TableFinal once spells are prepared
  const onPrepareClick = () => {
    setTable(true);
  };

  // resets chosen spells, longRested and view (back to TableChooseSpells)
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
      style={{
        backgroundImage: `url(${BackgroundTable})`,
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
                  {...props}
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
                    <tr className="">
                      <th
                        className=" tableStickyHead "
                        style={{ backgroundPosition: '-49px' }}
                      >
                        <h3 className="pl-0  ">Prep</h3>
                      </th>
                      <th
                        className=" tableStickyHead pl-0"
                        style={{ backgroundPosition: '-150px' }}
                      >
                        <h3 className="">Lvl</h3>
                      </th>
                      <th
                        className=" tableStickyHead "
                        style={{ backgroundPosition: '-185px' }}
                      >
                        <h3 className="">Name</h3>
                      </th>
                      <th
                        className=" tableStickyHead "
                        style={{
                          backgroundPosition: '-459px',
                        }}
                      >
                        <h3 className="">Casting Info</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="invisibleTableChooseSpells-body">
                    <tr className="invisibleTableChooseSpells-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    {data.map((spell, index) => {
                      return (
                        <TableChooseSpells
                          key={index}
                          spell={spell}
                          index={index}
                          newSpellPrepped={newSpellPrepped}
                          setNewSpellPrepped={setNewSpellPrepped}
                          {...props}
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
          newSpellPrepped={newSpellPrepped}
          setNewSpellPrepped={setNewSpellPrepped}
          {...props}
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
