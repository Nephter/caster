import { useState } from 'react';
import DropdownSchoolIcon from './DropdownSchoolIcon.js';
import PopoverCaster from './PopoverCaster.js';
import ModalDescription from './ModalDescription.js';
import { switchCastingTime } from '../Variables/SwitchStatements.js';

//command needs to be seperated out for readability

const TableFinalSpells = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(Boolean(null));

  const rowClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // sets Casting Time of spell
  let castingTime = switchCastingTime(props.spell.casting_time);

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
          dropdownIsOpen={dropdownIsOpen}
          setDropdownIsOpen={setDropdownIsOpen}
          {...props}
        />
        <ModalDescription
          rowClickHandler={rowClickHandler}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          {...props}
        />
      </td>
    </tr>
  );
};

export default TableFinalSpells;
