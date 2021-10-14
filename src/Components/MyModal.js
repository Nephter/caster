import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';

Modal.setAppElement('#root');

const MyModal = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const clickButton = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '60%',
      maxHeight: '70%',
      minWidth: '40%',
      minHeight: '40%',
      whiteSpace: 'pre-line',
    },
  };

  return (
    <div>
      <Button onClick={clickButton}>Open</Button>
      <Modal style={modalStyles} isOpen={modalIsOpen}>
        <h1>{data.spellName}</h1>
        <h6>{data.castingTime}</h6>
        <h6>Range: {data.range}</h6>
        <h6>Duration: {data.duration}</h6>

        <hr />
        <p>{data.description}</p>
        <Button onClick={clickButton}> Close </Button>
      </Modal>
    </div>
  );
};

export default MyModal;
