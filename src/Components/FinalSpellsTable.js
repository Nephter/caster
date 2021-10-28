import { useState, useEffect } from 'react';
import MyButton from './MyButton.js';
import MyDropdown from './MyDropdown.js';
import MyModal from './MyModal.js';
import Abjuration from '../assets/img/theme/Abjuration2.jpg';
import Conjuration from '../assets/img/theme/Conjuration2.jpg';
import Divination from '../assets/img/theme/Divination2.jpg';
import Enchantment from '../assets/img/theme/Enchantment2.jpg';
import Evocation from '../assets/img/theme/Evocation2.jpg';
import Illusion from '../assets/img/theme/Illusion2.jpg';
import Necromancy from '../assets/img/theme/Necromancy2.jpg';
import Transmutation from '../assets/img/theme/Transmutation2.jpg';

const FinalSpellsTable = (props) => {
  // const [available, setAvailable] = useState(props.spellPrepped);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const rowClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  var school;
  switch (props.spell.school.name) {
    case 'Abjuration':
      school = Abjuration;
      break;
    case 'Conjuration':
      school = Conjuration;
      break;
    case 'Divination':
      school = Divination;
      break;
    case 'Enchantment':
      school = Enchantment;
      break;
    case 'Evocation':
      school = Evocation;
      break;
    case 'Illusion':
      school = Illusion;
      break;
    case 'Necromancy':
      school = Necromancy;
      break;
    case 'Transmutation':
      school = Transmutation;
      break;
  }

  function setWidth() {
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    two.style.width = one.clientWidth + 'px';
  }
  useEffect(() => {
    // setWidth();
  }, []);

  return (
    <>
      <tr
        key={props.index}
        onClick={rowClickHandler}
        style={{ cursor: 'pointer' }}
        className="Yourclass"
      >
        <td
          className="prep"
          style={{
            width: '10px',
          }}
        >
          <h2
            className="level"
            style={{
              alignItems: 'center',
              marginInline: '20%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {props.spell.level}
            <img className="avatar rounded-circle" alt="..." src={school} />
          </h2>
        </td>
        <td id={'one'}>
          <h4 style={{ padding: 0, marginTop: 0 }}>{props.spell.name}</h4>
          <span>{props.spell.casting_time}</span>
          <span>{props.spell.components}</span>
        </td>
        <td>
          <h6>Duration: {props.spell.duration}</h6>
          <h6>Range: {props.spell.range}</h6>
        </td>
        <td>
          <MyDropdown
            index={props.index}
            spell={props.spell}
            // available={available}
            // setAvailable={setAvailable}
            spellSlots={props.spellSlots}
            setSpellSlots={props.setSpellSlots}
            onDropdownClick={props.onDropdownClick}
          />
          <MyModal
            key={props.index}
            spell={props.spell}
            rowClickHandler={rowClickHandler}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            spellDescription={props.spellDescription}
            setSpellDescription={props.setSpellDescription}
          />
        </td>
      </tr>
    </>
  );
};

export default FinalSpellsTable;
