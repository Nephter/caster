import React, { useState } from 'react';
import MyCheckbox from './MyCheckbox.js';

const ChooseSpellsTable = (props) => {
  const [available, setAvailable] = useState(false);

  return (
    <tr key={props.index}>
      <td className="prep">
        <MyCheckbox
          key={props.index}
          available={available}
          setAvailable={setAvailable}
          spellPrepped={props.spellPrepped}
          setSpellPrepped={props.setSpellPrepped}
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
        />
      </td>
      <td>
        <h2 className="level">{props.spell.level}</h2>
      </td>
      <td>
        <h4>{props.spell.name}</h4>
      </td>
      <td></td>
    </tr>
  );
};

export default ChooseSpellsTable;
