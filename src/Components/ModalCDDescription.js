import React from 'react';
import Modal from 'react-modal';
import parchment from '../assets/img/ModalParchment.svg';
import clericMace from '../assets/img/ClericMace.svg';
import { switchCastingTime } from '../Variables/SwitchStatements.js';

Modal.setAppElement('#root');

const ModalDescription = (props) => {
  // sets Casting Time of spell
  let castingTime = switchCastingTime(props.spell.casting_time);

  const modalStyles = {
    marginLeft: '10px',
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'transparent',
      zIndex: '999',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '80%',
      maxHeight: '100%',
      minWidth: '40%',
      minHeight: '40%',
      whiteSpace: 'pre-line',
      backgroundImage: `url(${parchment})`,
      backgroundSize: 'cover',
      border: 0,
      color: 'black',
      background: 'transparent',
      padding: '4%',
    },
  };

  return (
    <Modal key={props.index} style={modalStyles} isOpen={props.modalIsOpen}>
      <div className="ralewayFont pt-1" style={{ fontSize: '.8rem' }} />
      <img
        className="ml-3 rounded-circle avatar b-t"
        alt={'...'}
        src={clericMace}
      />
      <h1 className="modalTitle">{props.spell.name}</h1>
      <div>
        <span className="ralewayFont-span">{castingTime}</span>
        {props.spell.components && (
          <span className="ralewayFont-span">
            {' • '}
            {props.spell.components}
          </span>
        )}
      </div>
      {props.spell.material && <h4>Material: {props.spell.material}</h4>}
      <div>
        <h4>Duration: {props.spell.duration}</h4>
        <h4>Range: {props.spell.range}</h4>
      </div>
      <hr className="m-2" />
      <div>
        <h3>{props.spell.desc}</h3>
        {props.spell.higher_level && (
          <h2>
            Higher Level: <h3>{props.spell.higher_level}</h3>
          </h2>
        )}
      </div>
    </Modal>
  );
};

export default ModalDescription;
