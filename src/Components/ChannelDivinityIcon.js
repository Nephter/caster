import * as React from 'react';
import clericMace from '../assets/img/ClericMace.svg';
import wandNo from '../assets/img/wandNo.svg';

export default function ModalDropdownSchoolIcon(props) {
  return (
    <div className="">
      {props.spell.channelDivinity ? (
        <img
          className="ml-3 rounded-circle avatar-sm"
          alt={'...'}
          src={clericMace}
        />
      ) : (
        <img
          className="ml-4 mt-1"
          alt={'...'}
          src={wandNo}
          style={{ height: '1.7rem' }}
        />
      )}
    </div>
  );
}
