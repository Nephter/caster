import React, { useState } from 'react';
import CheckboxCustom from './CheckboxCustom.js';

const useTableChooseSpells = (props) => {
  const [available, setAvailable] = useState(false);

  return (
    <tr key={props.index}>
      <td className="prep">
        <CheckboxCustom
          available={available}
          setAvailable={setAvailable}
          {...props}
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

export default useTableChooseSpells;
