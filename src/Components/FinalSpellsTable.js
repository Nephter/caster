import { useState } from 'react';
import MyButton from './MyButton.js';
import MyModal from './MyModal.js';

const FinalSpellsTable = (props) => {
  const [available, setAvailable] = useState(props.spellPrepped);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const rowClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <tr
        key={props.index}
        onClick={rowClickHandler}
        style={{ cursor: 'pointer' }}
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
              justifyContent: 'center',
              marginLeft: '40%',
            }}
          >
            {props.spell.level}
          </h2>
        </td>
        <td>
          <span>{props.spell.name}</span>
          <span>{props.spell.casting_time}</span>
          <h6>{props.spell.components}</h6>
        </td>
        <td>
          <h6>Duration: {props.spell.duration}</h6>
          <h6>Range: {props.spell.range}</h6>
        </td>
        <td style={{ padding: 0, margin: 0 }}>
          <MyButton
            small
            spellSlots={props.spellSlots}
            setSpellSlots={props.setSpellSlots}
            available={available}
            setAvailable={setAvailable}
            index={props.index}
            spell={props.spell}
            onPopoverHandler={props.onPopoverHandler}
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
          ;
        </td>
      </tr>
    </>
  );
};

export default FinalSpellsTable;
