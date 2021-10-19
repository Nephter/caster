import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import MyNewTable from './Components/MyNewTable';
import { Card, Row } from 'reactstrap';

// when the "prepare" button is clicked, i want the table to rerender with only the prepared spells showing

function App(props) {
  const [loadingTable, setLoadingTable] = useState(true);
  const [spellsPrepared, setSpellsPrepared] = useState(false);
  const [button, setButton] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setSpellsPrepared(true);
    setLoadingTable(false);
  };
  const showButton = () => {
    setButton(true);
  };
  console.log(spellsPrepared);
  const data = props.spellsByLevel;
  return (
    <>
      <Container className="mt--10">
        <Row>
          <div className="col">
            <Card>
              <MyNewTable
                spellSlots={props.spellSlots}
                setSpellSlots={props.setSpellSlots}
                spellsPreparable={props.spellsPreparable}
                setSpellsPreparable={props.setSpellsPreparable}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
