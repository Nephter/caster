import { useState } from 'react';
import PopoverCDCaster from './PopoverCDCaster.js';
import PopoverAbilityCaster from './PopoverAbilityCaster.js';
import ModalCDDescription from './ModalCDDescription.js';
import DropdownCDIcon from './DropdownCDIcon.js';

// channel divinity spells once at lvl 1-5, twice lvl 6-17, thrice at lvl 18+
// warding flare, wrath of the storm, used a number of times equal to wisdom modifier
// spells that dont specify casting time are cast at any time as long as you have channel divinity available

const TableChannelDivinitySpells = (props) => {
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
    case 'Atleast 1 minute':
      castingTime = 'Atleast 1 MINUTE';
      break;
    case 'Once Per Turn':
      castingTime = 'ONCE PER TURN';
      break;
    default:
      castingTime = 'IF CHANNEL DIVINITY IS AVAILABLE';
  }

  return (
    <tr key={props.index} onClick={rowClickHandler} className="yourClass">
      <td className="d-flex align-items-center ml-1">
        <h2 className="level">{props.spell.level}</h2>
        <DropdownCDIcon
          spell={props.spell}
          channelDivinity={props.channelDivinity}
        />
      </td>
      <td className="pl-0">
        <span>
          <span>
            <h3 className="" style={{ fontSize: '1rem' }}>
              {props.spell.name}
            </h3>
          </span>
          {props.spell.longRest && <span>TRUUUUUU</span>}
        </span>
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
          {castingTime}{' '}
        </span>
        {props.spell.components && (
          <span
            style={{
              fontFamily: 'Raleway, sans-serif ',
              fontSize: '.7rem',
              color: 'black',
            }}
          >
            {' • '}
            {props.spell.components}
          </span>
        )}
      </td>
      <td style={{ paddingTop: '12px' }}>
        <h5>Duration: {props.spell.duration}</h5>
        <h5>Range: {props.spell.range}</h5>
      </td>
      <td key={props.index + 'reRender'}>
        {props.spell.channelDivinity ? (
          <PopoverCDCaster
            index={props.index}
            spell={props.spell}
            longRested={props.longRested}
            shortRested={props.shortRested}
            useChannelDivinity={props.useChannelDivinity}
            cDCasts={props.cDCasts}
          />
        ) : (
          <PopoverAbilityCaster
            index={props.index}
            spell={props.spell}
            shortRested={props.shortRested}
          />
        )}

        <ModalCDDescription
          index={props.index}
          spell={props.spell}
          modalIsOpen={modalIsOpen}
        />
      </td>
    </tr>
  );
};

export default TableChannelDivinitySpells;
