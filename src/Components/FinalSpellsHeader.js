import { Container, Row, Col } from 'reactstrap';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

const FinalSpellsHeader = (props) => {
  return (
    <Container fluid>
      <div className="header-body">
        <Row className="align-items-center">
          <Row className="align-items-center">
            <Col lg="6" xs="7">
              <h1 style={{ color: 'maroon' }}>Spell Slots:</h1>
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
                    style={{
                      paddingRight: '7px',
                      marginInline: '5px',
                      background: 'transparent',
                      border: '1px solid lightgrey',
                    }}
                    dir="rtl"
                    key={key}
                    label={num}
                    avatar={<Avatar>{k}</Avatar>}
                    size="small"
                    // color="success"
                  />
                );
              })}
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default FinalSpellsHeader;
