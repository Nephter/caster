import { useState } from 'react';
import Abjuration from '../assets/img/theme/Abjuration2.jpg';
import Conjuration from '../assets/img/theme/Conjuration2.jpg';
import Divination from '../assets/img/theme/Divination2.jpg';
import Enchantment from '../assets/img/theme/Enchantment2.jpg';
import Evocation from '../assets/img/theme/Evocation2.jpg';
import Illusion from '../assets/img/theme/Illusion2.jpg';
import Necromancy from '../assets/img/theme/Necromancy2.jpg';
import Transmutation from '../assets/img/theme/Transmutation2.jpg';
import DropdownSchoolIcon from './DropdownSchoolIcon.js';
import PopoverCaster from './PopoverCaster.js';
import ModalDescription from './ModalDescription.js';

const FinalSpellsTable = (props) => {
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
  console.log(props.newspellPrepped.spell);

  return (
    <tr key={props.index} onClick={rowClickHandler} className="Yourclass">
      <td className="d-flex justify-content-start align-items-center">
        <h2 className="level">{props.spell.level}</h2>
        <DropdownSchoolIcon spell={props.spell} />
      </td>
      <td className="">
        <h3 style={{ fontSize: '1rem' }}>{props.spell.name}</h3>
        <span
          className="actionType"
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
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
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
          setSpellDescription={props.setSpellDescription}
        />
      </td>
    </tr>
  );
};

export default FinalSpellsTable;
