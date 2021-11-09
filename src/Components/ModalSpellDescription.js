import React from 'react';

const ModalSpellDescription = (props) => {
  return (
    <tr key={props.index}>
      <td>{props.spell.desc}</td>
    </tr>
  );
};

export default ModalSpellDescription;
