import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
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
    <div className="parchment" style={{ width: '645px', height: '743' }}>
      {!table ? (
        <div>
          <Card className="b-t">
            <div style={{ height: '165px', width: 'inherit' }}>
              <CardHeader className="chooseSpellsCard-header">
                <HeaderChooseSpells
                  table={table}
                  onPrepareClick={onPrepareClick}
                  {...props}
                />
              </CardHeader>
            </div>
            <CardBody className="chooseSpellsCard-body">
              <Table hover borderless>
                <thead>
                  <tr className="chooseSpellsTable-row">
                    <th>
                      <h3>Prep</h3>
                    </th>
                    <th>
                      <h3>Lvl</h3>
                    </th>
                    <th>
                      <h3>Name</h3>
                    </th>
                    <th>
                      <h3>Casting Info</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="invisibleChooseSpellsTable-body">
                  <tr className="invisibleChooseSpellsTable-row">
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
      <div className="watermarkDomainIcon">{props.domainIcon} </div>
    </div>
  );
}

export default App;
