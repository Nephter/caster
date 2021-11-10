import { Avatar, Chip } from '@mui/material';
import React from 'react';
import PopoverRest from './PopoverRest';

const HeaderFinalSpells = (props) => {
  return (
    <>
      <span className="d-flex justify-content-between">
        <h1 className="pb-1 primaryText">Spell Slots:</h1>
        <PopoverRest
          domain={props.domain}
          spellSlots={props.spellSlots}
          onLongRestClick={props.onLongRestClick}
          setnewSpellPrepped={props.setnewSpellPrepped}
        />
      </span>

      <div>
        {props.spellSlots.map((k, key) => {
          var num = `Lvl ${key + 1}`;
          return k === 0 ? (
            ''
          ) : k === 1 ? (
            <Chip
              style={{
                // change
                border: '1px solid maroon',
                background: 'transparent',
                marginInline: '4px',
                fontFamily: 'Patrick Hand SC, cursive',
                height: '16px',
              }}
              dir="rtl"
              key={key}
              label={num}
              avatar={
                <Avatar
                  style={{
                    color: 'white',
                    fontFamily: 'Patrick Hand SC, cursive',
                    fontSize: '.9rem',
                    background: 'maroon',
                  }}
                >
                  {k}
                </Avatar>
              }
              size="small"
            />
          ) : (
            <Chip
              style={{
                marginInline: '4px',
                background: 'transparent',
                border: '1px solid gray',
                fontFamily: 'Patrick Hand SC, cursive',
                height: '15px',
                width: '58px',
              }}
              dir="rtl"
              key={key}
              label={num}
              avatar={
                <Avatar
                  style={{
                    color: 'black',
                    fontFamily: 'Patrick Hand SC, cursive',
                    fontSize: '.8rem',
                    paddingBottom: '2px',
                  }}
                >
                  {k}
                </Avatar>
              }
              size="small"
            />
          );
        })}
      </div>
    </>
  );
};

export default HeaderFinalSpells;
