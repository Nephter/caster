import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import TableParchment from './assets/img/TableParchment.svg';
import HeaderChooseSpells from './Components/HeaderChooseSpells';
import TableChooseSpells from './Components/TableChooseSpells';
import HeaderFinalSpells from './Components/HeaderFinalSpells';
import TableFinalSpells from './Components/TableFinalSpells';
import HeaderChannelDivinitySpells from './Components/HeaderChannelDivinitySpells';
import TableChannelDivinitySpells from './Components/TableChannelDivinitySpells';
import TableFinal from './Components/TableFinal';

// set preppared spells state of parent of both components, set = ([]). pass state to both components

//all checkboxes that are selected are used as a reference in final table

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);
  const [longRested, setLongRested] = useState(true);
  const [spellDescription, setModalSpellDescription] = useState(false);
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
      className="mt-6"
      style={{
        backgroundImage: `url(${TableParchment})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {!table ? (
        <Card style={{ background: 'transparent' }}>
          <div
            style={{
              height: '155px',
              background: 'transparent',
              width: 'inherit',
            }}
          >
            <CardHeader
              className="border-0"
              style={{
                background: 'transparent',
                width: 'inherit',
              }}
            >
              <HeaderChooseSpells
                table={table}
                domainIcon={props.domainIcon}
                onPrepareClick={onPrepareClick}
                spellsPreparable={props.spellsPreparable}
                setSpellsPreparable={props.setSpellsPreparable}
                numberOfSpellsPreparable={props.numberOfSpellsPreparable}
                setNumberOfSpellsPreparable={props.setNumberOfSpellsPreparable}
                playerLevel={props.playerLevel}
                modifier={props.modifier}
              />
            </CardHeader>
          </div>
          <CardBody style={{ paddingTop: 0 }}>
            <Table
              hover
              borderless
              style={{
                height: '600px',
                width: '100%',
              }}
            >
              <div
                className="table spellTableBody"
                style={{
                  marginTop: '-80px',
                  overflow: 'scroll',
                  maxHeight: '70vh',
                }}
              >
                <thead className="thead-light">
                  <tr
                    style={{
                      backgroundImage: `url(${TableParchment})`,
                    }}
                  >
                    <th
                      className="sort tableStickyHead"
                      scope="col"
                      style={{ backgroundPosition: '-53px' }}
                    >
                      <h3>Prep</h3>
                    </th>
                    <th
                      className="sort tableStickyHead pl-0"
                      scope="col"
                      style={{ backgroundPosition: '-114px' }}
                    >
                      <h3>Lvl</h3>
                    </th>
                    <th
                      className="sort tableStickyHead"
                      scope="col"
                      style={{ backgroundPosition: '-204px' }}
                    >
                      <h3>Name</h3>
                    </th>
                    <th
                      className="sort tableStickyHead"
                      scope="col"
                      style={{
                        backgroundPosition: '-458px',
                      }}
                    >
                      <h3>Casting Info</h3>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    minWidth: '100%',
                    cursor: 'pointer',
                    transform: 'translateY(-20px)',
                  }}
                >
                  <tr
                    style={{
                      padding: 0,
                    }}
                  >
                    <td
                      style={{
                        padding: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'transparent',
                          padding: 0,
                        }}
                      >
                        .
                      </h4>
                    </td>
                    <td
                      style={{
                        padding: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'transparent',
                          padding: 0,
                        }}
                      >
                        .
                      </h4>
                    </td>
                    <td
                      style={{
                        padding: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'transparent',
                          padding: 0,
                        }}
                      >
                        ............................................................
                      </h4>
                    </td>
                    <td
                      style={{
                        padding: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'transparent',
                          padding: 0,
                        }}
                      >
                        ..........
                      </h4>
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
      ) : (
        <TableFinal
          spellSlots={props.spellSlots}
          setSpellSlots={props.setSpellSlots}
          domainIcon={props.domainIcon}
          domain={props.domain}
          onLongRestClick={onLongRestClick}
          setNewSpellPrepped={setNewSpellPrepped}
          newSpellPrepped={newSpellPrepped}
          spellDescription={spellDescription}
          setModalSpellDescription={setModalSpellDescription}
          onDropdownClick={props.onDropdownClick}
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          channelDivinity={props.channelDivinity}
          useChannelDivinity={props.useChannelDivinity}
          longRested={longRested}
          setLongRested={setLongRested}
          cDCasts={props.cDCasts}
        />
      )}
      <div
        className=""
        style={{
          position: 'absolute',
          top: '30%',
          left: '35%',
          opacity: '.15',
          fontSize: '300px',
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

{
  /* <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter> */
}
