import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCheckbox from './MyCheckbox';
import MyButton from './MyButton';

export function MyTable(props) {
  const [available, setAvailable] = useState(props.spellsPrepared);

  return (
    <tr key={props.index}>
      <td>
        <MyCheckbox
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
          available={available}
          setAvailable={setAvailable}
          index={props.index}
          key={props.index}
        />
      </td>
      <td>{props.spell.name}</td>
      <td></td>
      <td>
        <MyButton
          small
          spellSlots={props.spellSlots}
          setSpellSlots={props.setSpellSlots}
          available={available}
          setAvailable={setAvailable}
          index={props.index}
          spell={props.spell}
          spellsPreparable={props.spellsPreparable}
          onPopoverHandler={props.onPopoverHandler}
        />
      </td>
    </tr>
  );
}
