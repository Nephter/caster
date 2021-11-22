import * as React from 'react';
import { switchSpellSchool } from '../Variables/SwitchStatements.js';

export default function ModalSchoolIcon(props) {
  // sets School Icon of spell
  let spellSchool = switchSpellSchool(props.spell.school.name);
  return (
    <img className=" rounded-circle avatar-xl" alt={'...'} src={spellSchool} />
  );
}
