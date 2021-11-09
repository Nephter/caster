import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import ChooseSpellsTable from './Components/ChooseSpellsTable';
import ChooseSpellsHeader from './Components/ChooseSpellsHeader';
import parchment from './assets/img/fuck.svg';
import FinalSpellsHeader from './Components/FinalSpellsHeader';
import FinalSpellsTable from './Components/FinalSpellsTable';

// set preppared spells state of parent of both components, set = ([]). pass state to both components

//all checkboxes that are selected are used as a reference in final table

// domains make unordered list in seperate file. put it between lvl and modifier. have it animate down to the full height of the list. upon click it animates back up to the chosen item

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);
  const [newspellPrepped, setnewSpellPrepped] = useState({ spell: [] });
  const [spellDescription, setSpellDescription] = useState(false);
  const [numberOfSpellsPreparable, setNumberOfSpellsPreparable] = useState(
    +props.playerLevel + +props.modifier
  );

  console.log(numberOfSpellsPreparable);
  const data = props.spellsByLevel;

  const onPrepareClick = () => {
    setTable(true);
  };

  const onLongRestClick = () => {
    setTable(false);
    props.setSpellsPreparable(numberOfSpellsPreparable);
  };

  return !loadingTable ? (
    'Loading...'
  ) : (
    <div
      className=""
      style={{
        backgroundImage: `url(${parchment})`,
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
            }}
          />
          <CardHeader
            className="border-0"
            style={{
              background: 'transparent',
              position: 'fixed',
              top: '10px',
              paddingBottom: 0,
            }}
          >
            <ChooseSpellsHeader
              table={table}
              onPrepareClick={onPrepareClick}
              spellsPreparable={props.spellsPreparable}
              setSpellsPreparable={props.setSpellsPreparable}
              numberOfSpellsPreparable={props.numberOfSpellsPreparable}
              setNumberOfSpellsPreparable={props.setNumberOfSpellsPreparable}
              playerLevel={props.playerLevel}
              modifier={props.modifier}
            />
          </CardHeader>
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
                  marginTop: '-45px',
                  overflow: 'scroll',
                  maxHeight: '60vh',
                }}
              >
                <thead className="thead-light">
                  <tr
                    style={{
                      backgroundImage: `url(${parchment})`,
                    }}
                  >
                    <th
                      className="sort tableStickyHead2"
                      scope="col"
                      style={{ backgroundPosition: '-53px' }}
                    >
                      <h3 style={{ color: 'maroon' }}>Prep</h3>
                    </th>
                    <th
                      className="sort tableStickyHead2 pl-0"
                      scope="col"
                      style={{ backgroundPosition: '-114px' }}
                    >
                      <h3 style={{ color: 'maroon' }}>Lvl</h3>
                    </th>
                    <th
                      className="sort tableStickyHead2"
                      scope="col"
                      style={{ backgroundPosition: '-204px' }}
                    >
                      <h3 style={{ color: 'maroon' }}>Name</h3>
                    </th>
                    <th
                      className="sort tableStickyHead2"
                      scope="col"
                      style={{
                        backgroundPosition: '-458px',
                      }}
                    >
                      <h3 style={{ color: 'maroon' }}>Casting Info</h3>
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
                      <ChooseSpellsTable
                        key={index}
                        spell={spell}
                        index={index}
                        newspellPrepped={newspellPrepped}
                        setnewSpellPrepped={setnewSpellPrepped}
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
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        <Card style={{ background: 'transparent' }}>
          <div
            style={{
              height: '155px',
              background: 'transparent',
            }}
          />
          <CardHeader
            className="border-0"
            style={{
              background: 'transparent',
              position: 'fixed',
              top: '10px',
              paddingBottom: 0,
              width: '68%',
            }}
          >
            <FinalSpellsHeader
              spellSlots={props.spellSlots}
              setSpellSlots={props.setSpellSlots}
              onLongRestClick={onLongRestClick}
              setnewSpellPrepped={setnewSpellPrepped}
            />
          </CardHeader>
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
                  marginTop: '-45px',
                  overflow: 'scroll',
                  maxHeight: '65vh',
                }}
              >
                <thead className="thead-light">
                  <tr
                    style={{
                      backgroundImage: `url(${parchment})`,
                    }}
                  >
                    <th
                      className="sort tableStickyHead pt-0"
                      scope="col"
                      style={{
                        backgroundPosition: '-49px',
                      }}
                    >
                      <h3 className="pl-0 pt-0" style={{ color: 'maroon' }}>
                        Lvl
                      </h3>
                    </th>
                    <th
                      className="sort tableStickyHead pl-0 pt-0"
                      scope="col"
                      style={{ backgroundPosition: '-141px' }}
                    >
                      <h3 className="pt-0" style={{ color: 'maroon' }}>
                        Name
                      </h3>
                    </th>
                    <th
                      className="sort tableStickyHead pt-0"
                      scope="col"
                      style={{ backgroundPosition: '-358px' }}
                    >
                      <h3 className="pt-0" style={{ color: 'maroon' }}>
                        Casting Info
                      </h3>
                    </th>
                    <th
                      className="tableStickyHead pt-0"
                      scope="col"
                      style={{
                        backgroundPosition: '-550px',
                      }}
                    >
                      <h3 className="pt-0" style={{ color: 'maroon' }}>
                        Cast it!
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    minWidth: '100%',
                    cursor: 'pointer',
                    transform: 'translateY(-25px)',
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
                        ............................................................................
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
                  {newspellPrepped.spell.map((spell, index) => {
                    return (
                      <FinalSpellsTable
                        key={index}
                        spell={spell}
                        index={index}
                        newspellPrepped={newspellPrepped}
                        setnewSpellPrepped={setnewSpellPrepped}
                        spellDescription={spellDescription}
                        setSpellDescription={setSpellDescription}
                        onDropdownClick={props.onDropdownClick}
                        spellSlots={props.spellSlots}
                        setSpellSlots={props.setSpellSlots}
                        spellsPreparable={props.spellsPreparable}
                        setSpellsPreparable={props.setSpellsPreparable}
                      />
                    );
                  })}
                </tbody>
              </div>
            </Table>
          </CardBody>
        </Card>
      )}
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
