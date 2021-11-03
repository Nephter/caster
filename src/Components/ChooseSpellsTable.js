import React, { useState } from 'react';
import MyCheckbox from './MyCheckbox.js';

const ChooseSpellsTable = (props) => {
  return (
    <tr key={props.index}>
      <td>
        <MyCheckbox
          key={props.index}
          spell={props.spell}
          index={props.index}
          newspellPrepped={props.newspellPrepped}
          setnewSpellPrepped={props.setnewSpellPrepped}
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
        />
      </td>
      <td>
        <h2 key={props.index} className="level">
          {props.spell.level}
        </h2>
      </td>
      <td>
        <h4 key={props.index}>{props.spell.name}</h4>
      </td>
      <td></td>
    </tr>
  );
};

export default ChooseSpellsTable;

// var lvl = document.getElementById('lvl');
// var lvlRef = document.getElementById('lvlRef');
// var name = document.getElementById('name');
// var nameRef = document.getElementById('nameRef');
// var duration = document.getElementById('duration');
// var durationRef = document.getElementById('durationRef');
// var cast = document.getElementById('cast');
// var castRef = document.getElementById('castRef');
// lvl.style.width = lvlRef.clientWidth + 'px';
// name.style.width = nameRef.clientWidth + 'px';
// duration.style.width = durationRef.clientWidth + 'px';
// cast.style.width = castRef.clientWidth + 'px';
