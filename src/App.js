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

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);
  const [newspellPrepped, setnewSpellPrepped] = useState({ spell: [] });
  const [spellDescription, setSpellDescription] = useState(false);

  const data = props.spellsByLevel;

  const handleClick = () => {
    // setWidth();
    setTable(true);
  };

  return !loadingTable ? (
    'Loading...'
  ) : (
    <div
      className="mx-auto"
      style={{
        backgroundImage: `url(${parchment})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {!table ? (
        <Container style={{ background: 'transparent' }}>
          <CardHeader
            className="border-0"
            style={{ background: 'transparent' }}
          >
            <ChooseSpellsHeader
              table={table}
              handleClick={handleClick}
              spellsPreparable={props.spellsPreparable}
              setSpellsPreparable={props.setSpellsPreparable}
            />
          </CardHeader>
          <Table hover striped borderless>
            <thead className="thead-light">
              <tr>
                <th
                  className="sort"
                  scope="col"
                  style={{
                    background: 'transparent',
                    color: 'maroon',
                    padding: 0,
                  }}
                >
                  <h4
                    style={{
                      color: 'maroon',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    Prep
                  </h4>
                </th>
                <th
                  className="sort"
                  scope="col"
                  style={{ background: 'transparent', color: 'maroon' }}
                >
                  <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
                    School Level
                  </h4>
                </th>
                <th
                  className="sort"
                  scope="col"
                  style={{
                    background: 'transparent',
                    color: 'maroon',
                    width: '151px',
                  }}
                >
                  <h4
                    style={{
                      color: 'maroon',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    Name
                  </h4>
                </th>
                <th
                  className="sort"
                  scope="col"
                  style={{ background: 'transparent', color: 'maroon' }}
                >
                  <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
                    Casting Time
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody className="list">
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
          </Table>
        </Container>
      ) : (
        <Card style={{ background: 'transparent' }}>
          <div
            style={{
              height: '155px',
              background: 'transparent',
              zIndex: '10',
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
            <FinalSpellsHeader
              spellSlots={props.spellSlots}
              setSpellSlots={props.setSpellSlots}
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
                    className=""
                    style={{
                      backgroundImage: `url(${parchment})`,
                      backgroundPosition: 'center',
                      backgroundPositionY: '30%',
                      backgroundSize: '690px auto',
                    }}
                  >
                    <th
                      className="sort tableStickyHead"
                      scope="col"
                      style={{ backgroundPosition: '-49px' }}
                    >
                      <h4 style={{ color: 'maroon' }}>Lvl</h4>
                    </th>
                    <th
                      className="sort tableStickyHead"
                      scope="col"
                      style={{ backgroundPosition: '-141px' }}
                    >
                      <h4 style={{ color: 'maroon' }}>Name</h4>
                    </th>
                    <th
                      className="sort tableStickyHead"
                      scope="col"
                      style={{ backgroundPosition: '-358px' }}
                    >
                      <h4 style={{ color: 'maroon' }}>Duration</h4>
                    </th>
                    <th
                      className="tableStickyHead"
                      scope="col"
                      style={{
                        backgroundPosition: '-544px',
                      }}
                    >
                      <h4 style={{ color: 'maroon' }}>Cast it!</h4>
                    </th>
                  </tr>
                </thead>

                <tbody
                  style={{
                    minWidth: '100%',
                    cursor: 'pointer',
                    transform: 'translateY(-30px)',
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
                        ..........
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
