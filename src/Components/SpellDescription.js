import React from 'react';

const SpellDescription = (props) => {
  return (
    <tr key={props.index}>
      <td>{props.spell.desc}</td>
    </tr>
  );
};

export default SpellDescription;
