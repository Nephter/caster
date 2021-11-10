import { Avatar, Chip } from '@mui/material';
import React from 'react';
import PopoverRest from './PopoverRest';

const HeaderFinalSpells = (props) => {
  return (
    <>
      <span className="d-flex justify-content-between">
        <h1 className="" style={{ color: 'maroon', paddingBottom: '5px' }}>
          Spell Slots:
        </h1>
        <PopoverRest
          domain={props.domain}
          spellSlots={props.spellSlots}
          onLongRestClick={props.onLongRestClick}
          setnewSpellPrepped={props.setnewSpellPrepped}
        />
        <span style={{ position: 'fixed', right: '20%' }}>
          {props.domainIcon}
        </span>
      </span>

      <div style={{ width: '80%', zIndex: '20' }}>
        {props.spellSlots.map((k, key) => {
          var num = `Lvl ${key + 1}`;
          return k === 0 ? (
            ''
          ) : k === 1 ? (
            <Chip
              style={{
                label: { paddingTop: '4px' },
                border: '1px solid maroon',
                background: 'transparent',
                // paddingRight: '7px',
                marginInline: '5px',
                fontFamily: 'Patrick Hand SC, cursive',
                height: '15px',
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
                // paddingRight: '7px',
                marginInline: '5px',
                background: 'transparent',
                border: '1px solid gray',
                fontFamily: 'Patrick Hand SC, cursive',
                height: '15px',
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
