import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    const spellIndex = props.newspellPrepped.spell.indexOf(props.spell);
    // checked
    if (isChecked) {
      props.onCheckboxHandler(1);
      props.newspellPrepped.spell.splice(spellIndex, 1);
      props.setnewSpellPrepped({
        spell: [...props.newspellPrepped.spell],
      });
      setIsChecked(!isChecked);
      // NOT checked
    } else {
      if (props.spellsPreparable === 0) {
        alert('You cannot prepare any more spells!');
      } else {
        props.onCheckboxHandler(-1);
        props.setnewSpellPrepped({
          spell: [...props.newspellPrepped.spell, props.spell],
        });
        setIsChecked(!isChecked);
      }
    }
  };

  return (
    <div key={props.index} className="text-center">
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
    </div>
  );
};

export default MyCheckbox;
