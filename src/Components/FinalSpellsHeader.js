import { Container, Row, Col } from 'reactstrap';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

const FinalSpellsHeader = (props) => {
  return (
    <>
      <h1 style={{ color: 'maroon', paddingBottom: '5px' }}>Spell Slots:</h1>
      {props.spellSlots.map((k, key) => {
        var num = `Lvl ${key + 1}`;
        return k === 0 ? (
          ''
        ) : k === 1 ? (
          <Chip
            style={{
              color: 'maroon',
              paddingRight: '7px',
              marginInline: '5px',
              fontFamily: 'Patrick Hand SC, cursive',
            }}
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
              fontFamily: 'Patrick Hand SC, cursive',
            }}
            dir="rtl"
            key={key}
            label={num}
            avatar={<Avatar>{k}</Avatar>}
            size="small"
          />
        );
      })}
    </>
  );
};

export default FinalSpellsHeader;
