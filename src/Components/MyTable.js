import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCheckbox from './MyCheckbox';
import MyButton from './MyButton';

export function MyTable(props) {
  const [available, setAvailable] = useState(props.spellsPrepared);
  const [finalTable, setFinalTable] = useState(false);

  // const showButton = () => {
  //   setAvailable(!available);
  // };

  return (
    <tr key={props.index}>
      <td>
        <MyCheckbox
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
          available={available}
          setAvailable={setAvailable}
          showButton={props.showButton}
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
          spellsPreparable={props.spellsPreparable}
          onPopoverHandler={props.onPopoverHandler}
          index={props.index}
          spell={props.spell}
          available={available}
          setAvailable={setAvailable}
          key={props.index}
          spellsPrepared={props.spellsPrepared}
          setSpellsPrepared={props.setSpellsPrepared}
        />
      </td>
    </tr>
  );
}
