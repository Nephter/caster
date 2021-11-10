import React, { useState } from 'react';
import Modal from 'react-modal';
import parchment from '../assets/img/parchment2.svg';
import ModalDropdownSchoolIcon from './ModalDropdownSchoolIcon';

Modal.setAppElement('#root');

const ModalDescription = (props) => {
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
      break;
    case '24 hours':
      castingTime = '24 HOURS';
      break;
    case '1 hour':
      castingTime = '1 HOUR';
      break;
  }

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
      <ModalDropdownSchoolIcon
        spell={props.spell}
        modalIsOpen={props.modalIsOpen}
      />
      <div className="ralewayFont pt-1" style={{ fontSize: '.8rem' }}>
        {props.spell.school.name}
      </div>
      <h1 style={{ fontSize: '2rem', transform: 'translate(0, 5px)' }}>
        {props.spell.name}
      </h1>
      <div>
        <span
          className="ralewayFont"
          style={{
            fontSize: '.7rem',
            color: 'black',
          }}
        >
          {castingTime}
          {' • '}
        </span>
        <span
          className="ralewayFont"
          style={{
            fontSize: '.7rem',
            color: 'black',
          }}
        >
          {props.spell.components}
        </span>
      </div>
      {props.spell.material && <h4>Material: {props.spell.material}</h4>}
      <div className="">
        <h4>Duration: {props.spell.duration}</h4>
        <h4>Range: {props.spell.range}</h4>
      </div>
      <hr style={{ margin: '10px' }} />
      <div>
        <h3>{props.spell.desc}</h3>
        {props.spell.higher_level && (
          <h3>
            Higher Level: <h3>{props.spell.higher_level}</h3>
          </h3>
        )}
      </div>
    </Modal>
  );
};

export default ModalDescription;
