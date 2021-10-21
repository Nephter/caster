import React, { useState } from 'react';
import MyCheckbox from './MyCheckbox.js';
import { Col, Media, Row } from 'reactstrap';

const ChooseSpellsTable = (props) => {
  const [available, setAvailable] = useState(props.spellsPrepared);

  return (
    <tr key={props.index}>
      <td className="prep">
        <MyCheckbox
          spellsPreparable={props.spellsPreparable}
          setSpellsPreparable={props.setSpellsPreparable}
          onCheckboxHandler={props.onCheckboxHandler}
          available={available}
          setAvailable={setAvailable}
          showButton={props.showButton}
          index={props.index}
          key={props.index}
        />
      </td>
      <td>
        <Media className="align-items-center">
          <h5 className="level">{props.spell.level}</h5>
          {/* <a
            className="avatar rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              src={require('../assets/img/theme/bootstrap.jpg').default}
            />
          </a> */}
        </Media>
      </td>
      <td>
        <h4>{props.spell.name}</h4>
        <h6> {props.spell.casting_time}</h6>
        <h6>{props.spell.components}</h6>
      </td>
      <td className="duration">
        <h6>Duration: {props.spell.duration}</h6>
        <h6>Range: {props.spell.range}</h6>
      </td>
    </tr>
  );
};

export default ChooseSpellsTable;
