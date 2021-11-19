import { useState } from 'react';
import DropdownSchoolIcon from './DropdownSchoolIcon.js';
import PopoverCaster from './PopoverCaster.js';
import ModalDescription from './ModalDescription.js';

//command needs to be seperated out for readability

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
    case '10 minutes':
      castingTime = '10 MINUTES';
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
      <td className="d-flex align-items-center ml-1 pb-2">
        <h2>{props.spell.level}</h2>
        <DropdownSchoolIcon spell={props.spell} domainIcon={props.domainIcon} />
      </td>
      <td className="pl-0">
        <h3 className="secondaryText">{props.spell.name}</h3>
        <span className="ralewayFont-span text-uppercase">
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
      </td>
      <td>
        <PopoverCaster
          index={props.index}
          spell={props.spell}
          dropdownIsOpen={dropdownIsOpen}
          setDropdownIsOpen={setDropdownIsOpen}
          spellSlots={props.spellSlots}
          onDropdownClick={props.onDropdownClick}
        />
        <ModalDescription
          index={props.index}
          spell={props.spell}
          rowClickHandler={rowClickHandler}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </td>
    </tr>
  );
};

export default TableFinalSpells;
