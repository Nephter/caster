import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { Card, CardHeader, Table } from 'reactstrap';
import ChooseSpellsTable from './Components/ChooseSpellsTable';
import ChooseSpellsHeader from './Components/ChooseSpellsHeader';
import parchment from './assets/img/theme/parchment5.jpg';
import List from 'list.js';

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [table, setTable] = useState(false);

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
  return loadingTable ? (
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
          {
            !table ? (
              <Container style={{ background: 'transparent' }}>
                <CardHeader
                  className="border-0"
                  style={{ background: 'transparent' }}
                >
                  <ChooseSpellsHeader
                    loadingTable={props.loadingTable}
                    setLoadingTable={props.setLoadingTable}
                    spellSlots={props.spellSlots}
                    setSpellSlots={props.setSpellSlots}
                    spellsPreparable={props.spellsPreparable}
                    setSpellsPreparable={props.setSpellsPreparable}
                    handleClick={props.handleClick}
                    table={table}
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
                        data-sort="prep"
                        scope="col"
                        style={{ background: 'transparent' }}
                      >
                        Prepare
                      </th>
                      <th
                        className="sort"
                        data-sort="level"
                        scope="col"
                        style={{ background: 'transparent' }}
                      >
                        School Level
                      </th>
                      <th
                        className="sort"
                        data-sort="name"
                        scope="col"
                        style={{ background: 'transparent' }}
                      >
                        Name Casting Time
                      </th>
                      <th
                        className="sort"
                        data-sort="status"
                        scope="col"
                        style={{ background: 'transparent' }}
                      >
                        Duration Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    {data.map((spell, index) => {
                      return (
                        <ChooseSpellsTable
                          spellsByLevel={props.spellsByLevel}
                          loadingTable={loadingTable}
                          setLoadingTable={setLoadingTable}
                          spellSlots={props.spellSlots}
                          setSpellSlots={props.setSpellSlots}
                          spellsPreparable={props.spellsPreparable}
                          setSpellsPreparable={props.setSpellsPreparable}
                          onCheckboxHandler={props.onCheckboxHandler}
                          handleClick={handleClick}
                          spell={spell}
                          key={index}
                        />
                      );
                    })}
                  </tbody>
                  {/* <CardFooter className="py-4">
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
                  </CardFooter> */}
                </Table>
              </Container>
            ) : (
              'loading...'
            )
            // (
            //   data.map((spell, index) => {
            //     return (
            //       <div>
            //         <CardHeader className="border-0">
            //           <FinalSpellsHeader
            //             loadingTable={props.loadingTable}
            //             setLoadingTable={props.setLoadingTable}
            //             spellSlots={props.spellSlots}
            //             setSpellSlots={props.setSpellSlots}
            //             spellsPreparable={props.spellsPreparable}
            //             setSpellsPreparable={props.setSpellsPreparable}
            //           />
            //         </CardHeader>
            //         <FinalSpellsTable
            //           loadingTable={loadingTable}
            //           setLoadingTable={setLoadingTable}
            //           table={table}
            //           spellSlots={props.spellSlots}
            //           setSpellSlots={props.setSpellSlots}
            //           spellsPreparable={props.spellsPreparable}
            //           setSpellsPreparable={props.setSpellsPreparable}
            //           spell={spell}
            //           key={index}
            //         />
            //       </div>
            //     );
            //   })
            // )
          }
        </Card>
      </Container>
    </div>
  ) : (
    'Loading...'
  );
}

export default App;
