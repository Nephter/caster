import * as React from 'react';
import Abjuration from '../assets/img/theme/Abjuration2.jpg';
import Conjuration from '../assets/img/theme/Conjuration2.jpg';
import Divination from '../assets/img/theme/Divination2.jpg';
import Enchantment from '../assets/img/theme/Enchantment2.jpg';
import Evocation from '../assets/img/theme/Evocation2.jpg';
import Illusion from '../assets/img/theme/Illusion2.jpg';
import Necromancy from '../assets/img/theme/Necromancy2.jpg';
import Transmutation from '../assets/img/theme/Transmutation2.jpg';

export default function ModalSchoolIcon(props) {
  var school;
  switch (props.spell.school.name) {
    case 'Abjuration':
      school = Abjuration;
      break;
    case 'Conjuration':
      school = Conjuration;
      break;
    case 'Divination':
      school = Divination;
      break;
    case 'Enchantment':
      school = Enchantment;
      break;
    case 'Evocation':
      school = Evocation;
      break;
    case 'Illusion':
      school = Illusion;
      break;
    case 'Necromancy':
      school = Necromancy;
      break;
    case 'Transmutation':
      school = Transmutation;
      break;
    default:
  }

  return <img className=" rounded-circle avatar-xl" alt={'...'} src={school} />;
}
