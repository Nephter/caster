import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCheckbox from './MyCheckbox';
import MyButton from './MyButton';

export function MyTable(props) {
  console.log('mytable');
  const [available, setAvailable] = useState(false);

  const showButton = () => {
    setAvailable(!available);
  };
  const index = props.index;
  const spell = props.spell;
  return (
    <tr key={index}>
      <td key={index}>
        <MyCheckbox
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
          available={available}
          setAvailable={setAvailable}
          showButton={showButton}
          index={index}
          key={index}
        />
      </td>
      <td key={index}>{spell[index]}</td>
      <td key={index}>
        <MyButton
          spellSlots={props.spellSlots}
          setSpellSlots={props.setSpellSlots}
          spellsPreparable={props.spellsPreparable}
          onPopoverHandler={props.onPopoverHandler}
          index={index}
          spell={spell}
          available={available}
          setAvailable={setAvailable}
          key={index}
        />
      </td>
    </tr>
  );
}
