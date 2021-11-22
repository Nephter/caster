import { useState } from 'react';
import PopoverCDCaster from './PopoverCDCaster.js';
import PopoverAbilityCaster from './PopoverAbilityCaster.js';
import ModalCDDescription from './ModalCDDescription.js';
import DropdownCDIcon from './DropdownCDIcon.js';
import { switchCastingTime } from '../Variables/SwitchStatements.js';

// channel divinity spells once at lvl 1-5, twice lvl 6-17, thrice at lvl 18+
// warding flare, wrath of the storm, used a number of times equal to wisdom modifier
// spells that dont specify casting time are cast at any time as long as you have channel divinity available

const TableChannelDivinitySpells = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const rowClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };
  let castingTime = switchCastingTime(props.spell.casting_time);

  return (
    <tr key={props.index} onClick={rowClickHandler} className="clickableRow">
      <td className="d-flex align-items-center ml-1 pb-2 ">
        <h2>{props.spell.level}</h2>
        <DropdownCDIcon {...props} />
      </td>
      <td className="pl-0">
        <span>
          <span>
            <h3 className="secondaryText">{props.spell.name}</h3>
          </span>
          {/* {props.spell.longRest && <span>TRUUUUUU</span>} */}
        </span>
        <span className="ralewayFont-span">{castingTime} </span>
        {props.spell.components && (
          <span className="ralewayFont-span">
            {' • '}
            {props.spell.components}
          </span>
        )}
      </td>
      <td>
        <h5>Duration: {props.spell.duration}</h5>
        <h5>Range: {props.spell.range}</h5>
      </td>
      {/* change */}
      <td>
        {props.spell.channelDivinity ? (
          <PopoverCDCaster {...props} />
        ) : (
          <PopoverAbilityCaster {...props} />
        )}

        <ModalCDDescription {...props} modalIsOpen={modalIsOpen} />
      </td>
    </tr>
  );
};

export default TableChannelDivinitySpells;
