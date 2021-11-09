import { useState } from 'react';
import DropdownSchoolIcon from './DropdownSchoolIcon.js';
import PopoverCaster from './PopoverCaster.js';
import ModalDescription from './ModalDescription.js';

const TableFinalSpells = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(Boolean(null));

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
  }

  console.log(props.spell[props.index]);

  return (
    <tr key={props.index} onClick={rowClickHandler} className="yourClass">
      <td className="d-flex align-items-center ml-1">
        <h2 className="level">{props.spell.level}</h2>
        <DropdownSchoolIcon spell={props.spell[props.index]} />
      </td>
      <td className="pl-0">
        <h3 className="" style={{ fontSize: '1rem' }}>
          {props.spell.name}
        </h3>
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
      <td style={{ paddingTop: '12px' }}>
        <h5>Duration: {props.spell.duration}</h5>
        <h5>Range: {props.spell.range}</h5>
      </td>
      <td>
        <PopoverCaster
          index={props.index}
          spell={props.spell}
          dropdownIsOpen={dropdownIsOpen}
          setDropdownIsOpen={setDropdownIsOpen}
          spellSlots={props.spellSlots}
          setSpellSlots={props.setSpellSlots}
          onDropdownClick={props.onDropdownClick}
        />
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

export default TableFinalSpells;
