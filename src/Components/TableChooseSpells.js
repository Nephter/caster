import React, { useState } from 'react';
import DropdownSchoolIcon from './DropdownSchoolIcon.js';
import ModalDescription from './ModalDescription.js';
import CheckboxCustom from './CheckboxCustom.js';
import { switchCastingTime } from '../Variables/SwitchStatements.js';

const TableChooseSpells = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const rowClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // sets Casting Time of spell
  let castingTime = switchCastingTime(props.spell.casting_time);

  return (
    <tr key={props.index} onClick={rowClickHandler} className="clickableRow">
      <td>
        <CheckboxCustom {...props} />
      </td>
      <td className="d-flex justify-content-start align-items-center pl-1 ">
        <h2>{props.spell.level}</h2>
        <DropdownSchoolIcon spell={props.spell} />
      </td>
      <td>
        <h3 className="secondaryText">{props.spell.name}</h3>
        <span className="ralewayFont-span">
          {castingTime}
          {' • '}
        </span>
        <span className="ralewayFont-span">{props.spell.components}</span>
        {props.spell.ritual === true ? (
          <span className="ralewayFont-span">{' • '}RITUAL</span>
        ) : null}
      </td>
      <td>
        <h5>Duration: {props.spell.duration}</h5>
        <h5>Range: {props.spell.range}</h5>
        <ModalDescription {...props} modalIsOpen={modalIsOpen} />
      </td>
    </tr>
  );
};

export default TableChooseSpells;
