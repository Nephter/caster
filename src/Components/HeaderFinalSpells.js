import { Avatar, Chip } from '@mui/material';
import React from 'react';
import PopoverRest from './PopoverRest';

const HeaderFinalSpells = (props) => {
  return (
    <>
      <span className="d-flex justify-content-between">
        <h1
          className="pb-1 primaryText"
          style={{ paddingLeft: '1rem', marginTop: '-31px' }}
        >
          Spell Slots:
        </h1>
        <PopoverRest {...props} />
      </span>
      <div
        className="d-flex justify-content-start"
        style={{ width: '98%', paddingLeft: '10px' }}
      >
        {props.spellSlots.map((k, key) => {
          var num = `Lvl ${key + 1}`;
          return k === 0 ? (
            ''
          ) : k === 1 ? (
            <Chip
              sx={{
                border: '1px solid #664703',
                filter: 'brightness(1.75)',
              }}
              size="small"
              dir="rtl"
              key={key}
              label={num}
              avatar={
                <Avatar
                  style={{
                    color: 'white',
                    background: '#664703',
                  }}
                >
                  <h3
                    style={{
                      color: 'white',
                      fontSize: '.9rem',
                    }}
                  >
                    {k}
                  </h3>
                </Avatar>
              }
            />
          ) : (
            <Chip
              size="small"
              sx={{
                border: '1px solid gray',
              }}
              dir="rtl"
              key={key}
              label={num}
              avatar={
                <Avatar
                  sx={{
                    color: 'black',
                  }}
                >
                  <h4>{k}</h4>
                </Avatar>
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default HeaderFinalSpells;
