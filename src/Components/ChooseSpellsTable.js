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
