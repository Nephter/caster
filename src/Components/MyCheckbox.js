import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  // const [isChecked, setIsChecked] = useState(props.available);

  const handleCheckbox = () => {
    if (props.spellsPreparable === 0) {
      if (isChecked) {
        setIsChecked(!isChecked);
        props.onCheckboxHandler(+props.spellsPreparable + 1);
      } else {
        alert('No');
      }
    } else {
      var count;
      isChecked ? (count = 1) : (count = -1);
      props.onCheckboxHandler(count);
      setIsChecked(!isChecked);
      props.setSpellPrepped(!isChecked);
    }
  };
  return (
    <div key={props.index} className="text-center">
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
    </div>
  );
};

export default MyCheckbox;
