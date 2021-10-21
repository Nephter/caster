import React, { useState } from 'react';
import MyCheckbox from './MyCheckbox.js';
import { Media } from 'reactstrap';

const ChooseSpellsTable = (props) => {
  const [available, setAvailable] = useState(props.spellsPrepared);
  // const spellTable = React.useRef(null);

  // useEffect(() => {
  //   new List(spellTable.current, {
  //     valueNames: ['prep', 'level', 'name', 'status'],
  //     listClass: 'list',
  //   });
  // }, []);

  return (
    <tr key={props.index}>
      <td>
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
          <span className="">{props.spell.level}</span>
          <a
            className="avatar rounded-circle"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              src={require('../assets/img/theme/bootstrap.jpg').default}
            />
          </a>
        </Media>
      </td>
      <td className="name">
        <h4>{props.spell.name}</h4>
        <div>
          <span>{props.spell.casting_time} </span>
          <span> </span>
          <span> {props.spell.components}</span>
        </div>
      </td>
      <td>
        <h6>Duration: {props.spell.duration}</h6>
        <h6>Range: {props.spell.range}</h6>
      </td>
    </tr>
  );
};

export default ChooseSpellsTable;
