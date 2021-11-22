import React from 'react';
import PopoverRest from './PopoverRest';

const HeaderChannelDivinitySpells = (props) => {
  return (
    <>
      <span className="d-flex justify-content-between">
        <h1
          className="pb-1 primaryText"
          style={{
            paddingLeft: '1rem',
            marginTop: '-31px',
          }}
        >
          Channel Divinity Abilities:
        </h1>
        <PopoverRest {...props} />
      </span>
    </>
  );
};

export default HeaderChannelDivinitySpells;
