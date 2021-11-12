import React from 'react';
import PopoverRest from './PopoverRest';
import potionFull from '../assets/img/potionFull.svg';
import potionEmpty from '../assets/img/potionEmpty.svg';

const HeaderFinalSpells = (props) => {
  return (
    <>
      <span className="d-flex justify-content-between">
        <h1 className="pb-1 primaryText">Channel Divinity Abilities:</h1>
        <PopoverRest
          domain={props.domain}
          spellSlots={props.spellSlots}
          onLongRestClick={props.onLongRestClick}
          onShortRestClick={props.onShortRestClick}
          setNewSpellPrepped={props.setNewSpellPrepped}
        />
      </span>
    </>
  );
};

export default HeaderFinalSpells;
