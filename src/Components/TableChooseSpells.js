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
    default:
      castingTime = 'LONG TIME';
  }

  return (
    <tr key={props.index} onClick={rowClickHandler} className="yourClass">
      <td>
        <CheckboxCustom
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
      <td className="d-flex justify-content-start align-items-center pl-1">
        <h2 className="level">{props.spell.level}</h2>
        <DropdownSchoolIcon spell={props.spell} />
      </td>
      <td>
        <h3 style={{ fontSize: '1rem' }}>{props.spell.name}</h3>
        <span
          className="ralewayFont"
          style={{
            marginTop: 0,
            paddingTop: 0,
            fontFamily: 'Raleway, sans-serif ',
            fontSize: '.65rem',
            color: 'black',
          }}
        >
          {castingTime}
          {' • '}
        </span>
        <span
          style={{
            fontFamily: 'Raleway, sans-serif ',
            fontSize: '.7rem',
            color: 'black',
          }}
        >
          {props.spell.components}
        </span>
      </td>
      <td>
        <h5>Duration: {props.spell.duration}</h5>
        <h5>Range: {props.spell.range}</h5>
        <ModalDescription
          index={props.index}
          spell={props.spell}
          rowClickHandler={rowClickHandler}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          spellDescription={props.spellDescription}
          setModalSpellDescription={props.setModalSpellDescription}
        />
      </td>
    </tr>
  );
};

export default TableChooseSpells;
