import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { spellsListData } from '../Variables/Spells';
import { MyTable } from './MyTable';

const Body = (props) => {
  console.log('body');
  const [loadingTable, setLoadingTable] = useState(false);
  const data = spellsListData;
  return (
    <Container className="my-auto mx-auto">
      {props.yourSpells ? (
        <Table striped bordered hover className="w-50 my-auto mx-auto">
          <thead>
            <tr>
              {console.log(props.yourSpells)}
              <th style={{ width: '25px' }}>Prep</th>
              <th>Spell Name:</th>
              <th>Details</th>
              <th>Cast it!</th>
            </tr>
          </thead>
          <tbody>
            {data.map((spell, index) => {
              return (
                <MyTable
                  key={index}
                  {...props}
                  spell={spell}
                  setLoadingTable={setLoadingTable}
                  loadingTable={loadingTable}
                />
              );
            })}
          </tbody>
        </Table>
      ) : (
        'Loading...'
      )}
    </Container>
  );
};

export default Body;
