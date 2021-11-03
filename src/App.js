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
  let lvlWidth;
  let nameWidth;
  // useEffect(() => {
  //   var lvl = document.getElementById('lvl');
  //   var lvlRef = document.getElementById('lvlRef');
  //   const lvlWidthSetter = () => {
  //     return (lvlWidth = lvlRef.clientWidth + 'px');
  //   };

  //   const nothing = () => {
  //     console.log('nothing');
  //   };
  //   lvlRef.clientWidth === 0 ? nothing() : lvlWidthSetter();
  // }, [table]);
  function setWidth() {
    var lvl = document.getElementById('lvl');
    var lvlRef = document.getElementById('lvlRef');
    var name = document.getElementById('name');
    var nameRef = document.getElementById('nameRef');
    var duration = document.getElementById('duration');
    var durationRef = document.getElementById('durationRef');
    var cast = document.getElementById('cast');
    var castRef = document.getElementById('castRef');
    // lvl.style.width = lvlRef.clientWidth + 'px';
    // name.style.width = nameRef.clientWidth + 'px';
    // duration.style.width = durationRef.clientWidth + 'px';
    // cast.style.width = castRef.clientWidth + 'px';
    let lvlWidth = lvlRef.clientWidth + 'px';
    let nameWidth = nameRef.clientWidth + 'px';
    let durationWidth = durationRef.clientWidth + 'px';
    let castWidth = castRef.clientWidth + 'px';
  }

  return !loadingTable ? (
    'Loading...'
  ) : (
    <div
      className="mx-auto"
      style={{
        backgroundImage: `url(${parchment})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: '690px',
        maxHeight: '100vh',
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
          {setWidth}
          <div
            style={{
              height: '105px',
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
              <div className="table" style={{ height: '40px' }}>
                <thead
                  className="thead-light"
                  style={{
                    transform: 'translateY(-10px)',
                    height: '40px',
                  }}
                >
                  <tr>
                    <th
                      id="lvl"
                      className="sort"
                      scope="col"
                      style={{
                        paddingLeft: '5px',
                        background: 'transparent',
                        color: 'maroon',
                      }}
                    >
                      <h2
                        style={{
                          color: 'maroon',
                        }}
                      >
                        Lvl
                      </h2>
                    </th>
                    <th
                      className="sort"
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                      }}
                    >
                      <h2
                        style={{
                          color: 'maroon',
                        }}
                      >
                        Name
                      </h2>
                    </th>
                    <th
                      id="duration"
                      className="sort"
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                      }}
                    >
                      <h2
                        style={{
                          color: 'maroon',
                        }}
                      >
                        Duration
                      </h2>
                    </th>
                    <th
                      id="cast"
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                      }}
                    >
                      <h2
                        style={{
                          color: 'maroon',
                        }}
                      >
                        Cast It!
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="lvl" style={{ width: { lvlWidth } }}>
                      <h4 style={{ color: 'transparent' }}>fillerfillerl</h4>
                    </td>
                    <td>
                      <h4
                        id="name"
                        style={{
                          color: 'transparent',
                          paddingRight: '5px',
                          width: { nameWidth },
                        }}
                      >
                        asdfasdfasdfasdfas
                      </h4>
                    </td>
                    <td>
                      <h4 style={{ color: 'transparent' }}></h4>
                    </td>
                    <td>
                      <h4 style={{ color: 'transparent' }}></h4>
                    </td>
                  </tr>
                </tbody>
              </div>
              <div
                className="table spellTableBody"
                style={{
                  marginTop: '-15px',
                  overflow: 'scroll',
                  maxHeight: '65vh',
                  width: '800px',
                }}
              >
                <thead className="thead-light">
                  <tr>
                    <th
                      id="lvlRef"
                      className="sort "
                      scope="col"
                      style={{
                        background: '',
                        border: '1px dotted blue',
                      }}
                    >
                      <h4 style={{ color: 'transparent' }}></h4>
                    </th>
                    <th
                      id="nameRef"
                      className="sort"
                      scope="col"
                      style={{ marginRight: '10px', background: '' }}
                    >
                      <h4 style={{ color: 'transparent' }}>∫</h4>
                    </th>
                    <th
                      id="durationRef"
                      className="sort"
                      scope="col"
                      style={{ background: '', border: '1px dotted blue' }}
                    >
                      <h4 style={{ color: 'transparent' }}></h4>
                    </th>
                    <th
                      id="castRef"
                      className=""
                      scope="col"
                      style={{
                        background: '',
                      }}
                    >
                      <h4 style={{ color: 'transparent' }}></h4>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    transform: 'translateY(-35px)',
                    minWidth: '100%',
                    cursor: 'pointer',
                  }}
                >
                  {data.map((spell, index) => {
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
