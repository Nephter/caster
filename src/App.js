import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { Card, CardHeader, Table } from 'reactstrap';
import ChooseSpellsTable from './Components/ChooseSpellsTable';
import ChooseSpellsHeader from './Components/ChooseSpellsHeader';
import parchment from './assets/img/theme/parchment5.jpg';
import List from 'list.js';
import FinalSpellsHeader from './Components/FinalSpellsHeader';
import FinalSpellsTable from './Components/FinalSpellsTable';

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);
  const [spellPrepped, setSpellPrepped] = useState(false);
  const [spellDescription, setSpellDescription] = useState(false);

  const firstListRef = React.useRef(null);
  const secondListRef = React.useRef(null);
  const thirdListRef = React.useRef(null);
  React.useEffect(() => {
    new List(firstListRef.current, {
      valueNames: ['prep', 'level', 'name', 'duration'],
      listClass: 'list',
    });
    new List(secondListRef.current, {
      valueNames: ['prep', 'level', 'name', 'duration'],
      listClass: 'list',
    });
    new List(thirdListRef.current, {
      valueNames: ['prep', 'level', 'name', 'duration'],
      listClass: 'list',
    });
  }, []);

  const handleClick = () => {
    setTable(true);
  };

  const data = props.spellsByLevel;
  console.log(spellPrepped);
  return !loadingTable ? (
    'Loading...'
  ) : (
    <div>
      <Container
        className="mt--10"
        style={{
          width: '80%',
          backgroundImage: `url(${parchment})`,
          backgroundSize: 'contain',
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
                // ref={spellTable}
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
                      <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
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
                      style={{ background: 'transparent', color: 'maroon' }}
                    >
                      <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
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
            <Container style={{ background: 'transparent' }}>
              <CardHeader
                className="border-0"
                style={{ background: 'transparent' }}
              >
                <FinalSpellsHeader
                  spellSlots={props.spellSlots}
                  setSpellSlots={props.setSpellSlots}
                />
              </CardHeader>
              <Table
                className=" table-sm align-items-center "
                responsive
                hover
                striped
                borderless
                // ref={spellTable}
              >
                <thead className="thead-light">
                  <tr>
                    <th
                      className="sort"
                      // data-sort="name"
                      scope="col"
                      style={{ background: 'transparent', color: 'maroon' }}
                    >
                      <h4
                        style={{
                          color: 'maroon',
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        Level
                      </h4>
                    </th>
                    <th
                      className="sort"
                      // data-sort="budget"
                      scope="col"
                      style={{ background: 'transparent', color: 'maroon' }}
                    >
                      <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
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
                        Duration Range
                      </h4>
                    </th>
                    <th
                      scope="col"
                      style={{ background: 'transparent', color: 'maroon' }}
                    >
                      <h4 style={{ color: 'maroon', padding: 0, margin: 0 }}>
                        Cast It!
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  {data.map((spell, index) => {
                    return (
                      <FinalSpellsTable
                        spell={spell}
                        key={index}
                        spellPrepped={spellPrepped}
                        setSpellPrepped={setSpellPrepped}
                        onPopoverHandler={props.onPopoverHandler}
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
              </Table>
            </Container>
          )}
        </Card>
      </Container>
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
