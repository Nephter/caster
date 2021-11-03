import React, { useState } from 'react';
import Modal from 'react-modal';
import parchment from '../assets/img/parchment2.svg';

Modal.setAppElement('#root');

const ModalDescription = (props) => {
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
      maxWidth: '60%',
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
      <div style={{ background: 'transparent' }}>
        <div style={{ fontSize: '2rem', paddingTop: '10px' }}>
          {props.spell.name}
        </div>
        <div
          style={{
            fontSize: '.75rem',
            paddingTop: '5px',
          }}
        >
          {props.spell.components}
        </div>
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
