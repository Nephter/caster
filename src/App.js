import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { Card, CardHeader, Table } from 'reactstrap';
import ChooseSpellsTable from './Components/ChooseSpellsTable';
import ChooseSpellsHeader from './Components/ChooseSpellsHeader';
import parchment from './assets/img/parchment2.svg';
import FinalSpellsHeader from './Components/FinalSpellsHeader';
import FinalSpellsTable from './Components/FinalSpellsTable';

// set header content to highest z index, table header to second, space for table rows to disapear next, then rows, then parchment

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);
  const [spellPrepped, setSpellPrepped] = useState(false);
  const [spellDescription, setSpellDescription] = useState(false);

  const handleClick = () => {
    setTable(true);
  };

  const data = props.spellsByLevel;
  console.log(spellPrepped);
  return !loadingTable ? (
    'Loading...'
  ) : (
    <Container
      style={{
        // width: 'auto',
        // height: '900px',
        // maxHeight: '90vh',
        backgroundImage: `url(${parchment})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        // overflow: 'scroll',
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex',
        marginLeft: '20%',
        // border: '1px dotted yellow',
      }}
    >
      <Card style={{ background: 'transparent' }}>
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
            <Table
              className=" table-sm align-items-center "
              responsive
              hover
              striped
              borderless
            >
              <thead className="thead-light">
                <tr>
                  <th
                    className="sort"
                    // data-sort="prep"
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
                        fontWeight: '900',
                      }}
                    >
                      Prep
                    </h4>
                  </th>
                  <th
                    className="sort"
                    // data-sort="level"
                    scope="col"
                    style={{ background: 'transparent', color: 'maroon' }}
                  >
                    <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
                      School Level
                    </h4>
                  </th>
                  <th
                    className="sort"
                    // data-sort="name"
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
                    // data-sort="status"
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
                      spell={spell}
                      key={index}
                      spellPrepped={spellPrepped}
                      setSpellPrepped={setSpellPrepped}
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
          <Container
            style={{
              background: 'inherit',
              // overflowY: 'scroll',
              // maxHeight: '2000px',
              // height: '800px',
              // border: '1px dotted red',
              zIndex: '2',
              width: '100%',
            }}
          >
            {' '}
            <div
              style={{
                position: 'absolute',
                width: '96%',
                height: '145px',
                // border: '1px dotted yellow',
                background: 'inherit',
                // zIndex: '999',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '105px',
                // border: '1px dotted blue',
                background: 'inherit',
              }}
            />
            <CardHeader
              className="border-0"
              style={{
                background: 'inherit',
                position: 'fixed',
                top: 0,
                height: '100px',
                width: '58%',
              }}
            >
              <FinalSpellsHeader
                spellSlots={props.spellSlots}
                setSpellSlots={props.setSpellSlots}
              />
            </CardHeader>
            <Table
              className=" table-sm align-items-center "
              // responsive
              hover
              // striped
              borderless
              // ref={spellTable}
              style={{ maxHeight: '600px', height: '600px' }}
            >
              <div>
                <thead
                  className="thead-light"
                  style={{
                    position: 'sticky',
                    top: '18%',
                    transform: 'translateY(-10px)',
                    // maxHeight: '0px !important',
                    // overflow: 'hidden',
                    // color: 'transparent',
                  }}
                >
                  <tr>
                    <th
                      className="sort"
                      // data-sort="name"
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'maroon',
                          padding: 0,
                          margin: 0,
                          position: 'sticky',
                          top: 0,
                        }}
                      >
                        Level School
                      </h4>
                    </th>
                    <th
                      id="two"
                      className="sort"
                      // data-sort="budget"
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'maroon',
                          padding: 0,
                          margin: 0,
                          position: 'sticky',
                          top: 0,
                        }}
                      >
                        Name
                      </h4>
                    </th>
                    <th
                      className="sort"
                      // data-sort="status"
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'maroon',
                          paddingLeft: '50px',
                          margin: 0,
                          position: 'sticky',
                          top: 0,
                        }}
                      >
                        Duration
                      </h4>
                    </th>
                    <th
                      scope="col"
                      style={{
                        background: 'transparent',
                        color: 'maroon',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4
                        style={{
                          color: 'maroon',
                          padding: 0,
                          margin: 0,
                          position: 'sticky',
                          top: 0,
                        }}
                      >
                        Cast It!
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </div>

              {/* hidden Table Header */}

              <div
                className=""
                style={{
                  marginTop: '-18px',
                  position: 'relative',
                  // border: '1px dotted black',
                  overflow: 'scroll',
                  maxHeight: '72vh',
                  // paddingBottom: '20px',
                  marginBottom: '50px',
                }}
              >
                <thead
                  className="thead-light mt-n3"
                  style={{
                    position: 'sticky',
                  }}
                >
                  <tr>
                    <th
                      className="sort mt-n3"
                      // data-sort="name"
                      scope="col"
                      style={{
                        background: 'transparent',
                        // color: 'transparent',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4 style={{ color: 'transparent' }}>Level School</h4>
                    </th>
                    <th
                      className="sort mt-m3"
                      // data-sort="budget"
                      scope="col"
                      style={{
                        background: 'transparent',
                        // color: 'transparent',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4 style={{ color: 'transparent' }}>Name</h4>
                    </th>
                    <th
                      className="sort mt-m3"
                      // data-sort="status"
                      scope="col"
                      style={{
                        background: 'transparent',
                        // color: 'transparent',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4 style={{ color: 'transparent' }}>Duration</h4>
                    </th>
                    <th
                      className="mt-m3"
                      scope="col"
                      style={{
                        background: 'transparent',
                        // color: 'transparent',
                        position: 'sticky',
                        top: 0,
                      }}
                    >
                      <h4 style={{ color: 'transparent' }}>Cast It!</h4>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    // border: '1px dotted green',
                    background: 'inherit',
                    // marginTop: '-45px',
                    overflow: 'scroll',
                    transform: 'translateY(-35px)',
                    // paddingBottom: '30px',
                    // position: 'sticky',
                    height: '800px',
                    width: '80%',
                  }}
                >
                  {data.map((spell, index) => {
                    return (
                      <FinalSpellsTable
                        spell={spell}
                        key={index}
                        spellPrepped={spellPrepped}
                        setSpellPrepped={setSpellPrepped}
                        onDropdownClick={props.onDropdownClick}
                        spellSlots={props.spellSlots}
                        setSpellSlots={props.setSpellSlots}
                        spellsPreparable={props.spellsPreparable}
                        setSpellsPreparable={props.setSpellsPreparable}
                        spellDescription={spellDescription}
                        setSpellDescription={setSpellDescription}
                      />
                    );
                  })}
                </tbody>
              </div>
            </Table>
          </Container>
        )}
      </Card>
    </Container>
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
