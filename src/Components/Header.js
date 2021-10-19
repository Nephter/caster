import { Container, Row, Col, Label } from 'reactstrap';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

const Header = (props) => {
  // console.log('header');
  return (
    <Container fluid>
      <div className="header-body">
        <Row className="align-items-center">
          <Col lg="6" xs="7">
            <Label for="spellsPreparable">
              <h2>Preparable: {props.spellsPreparable}</h2>
            </Label>
          </Col>
          <Row className="align-items-center">
            <Col lg="6" xs="7">
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
        </Row>{' '}
      </div>
    </Container>
  );
};

export default Header;
