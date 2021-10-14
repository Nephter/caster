import { Avatar, Chip } from '@mui/material';
import React from 'react';
import { Col, Row, Label, Container } from 'reactstrap';

const Header = (props) => {
  console.log('header');
  return (
    <Container style={{ padding: '30px' }}>
      <Row>
        <Col>
          <Label for="spellsPreparable">
            <h2>Preparable: {props.spellsPreparable}</h2>
          </Label>
          <hr />
        </Col>
      </Row>{' '}
      <Row>
        <Col>
          <h4>Spell Slots:</h4>
          {props.spellSlots.map((k, key) => {
            var num = `Lvl ${key + 1}`;
            return k === 0 ? (
              ''
            ) : k === 1 ? (
              <Chip
                style={{ paddingRight: '7px', marginInline: '5px' }}
                dir="rtl"
                key={key}
                label={num}
                avatar={<Avatar>{k}</Avatar>}
                size="small"
                color="warning"
              />
            ) : (
              <Chip
                style={{ paddingRight: '7px', marginInline: '5px' }}
                dir="rtl"
                key={key}
                label={num}
                avatar={<Avatar>{k}</Avatar>}
                size="small"
                color="success"
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
