import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

const CheckboxCustom = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
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
    e.stopPropagation();
  };

  const doNothing = () => {};

  return (
    <div
      key={props.index}
      className="d-flex justify-content-center align-items-center castButton pt-1 pl-3"
    >
      <Input
        className=""
        style={{ position: 'relative', cursor: 'pointer' }}
        type="checkbox"
        checked={isChecked}
        onClick={handleCheckbox}
        onChange={doNothing}
      />
    </div>
  );
};

export default CheckboxCustom;
