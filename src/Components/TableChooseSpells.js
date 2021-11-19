import React, { useState } from 'react';
import DropdownSchoolIcon from './DropdownSchoolIcon.js';
import ModalDescription from './ModalDescription.js';
import CheckboxCustom from './CheckboxCustom.js';

const TableChooseSpells = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const rowClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  var castingTime;
  switch (props.spell.casting_time) {
    case '1 action':
      castingTime = 'ACTION';
      break;
    case '1 bonus action':
      castingTime = 'BONUS ACTION';
      break;
    case '1 reaction':
      castingTime = 'REACTION';
      break;
    case '10 minutes':
      castingTime = '10 Minutes';
      break;
    case '1 minute':
      castingTime = '1 MINUTE';
      break;
    case '24 hours':
      castingTime = '24 HOURS';
      break;
    case '1 hour':
      castingTime = '1 HOUR';
      break;
    default:
  }

  return (
    <tr key={props.index} onClick={rowClickHandler} className="clickableRow">
      <td>
        <CheckboxCustom
          key={props.index}
          spell={props.spell}
          index={props.index}
          newSpellPrepped={props.newSpellPrepped}
          setNewSpellPrepped={props.setNewSpellPrepped}
          spellsPreparable={props.spellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
        />
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
        <ModalDescription
          index={props.index}
          spell={props.spell}
          modalIsOpen={modalIsOpen}
        />
      </td>
    </tr>
  );
};

export default TableChooseSpells;
