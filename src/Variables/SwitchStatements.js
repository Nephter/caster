import Abjuration from '../assets/img/schoolIcons/Abjuration2.jpg';
import Conjuration from '../assets/img/schoolIcons/Conjuration2.jpg';
import Divination from '../assets/img/schoolIcons/Divination2.jpg';
import Enchantment from '../assets/img/schoolIcons/Enchantment2.jpg';
import Evocation from '../assets/img/schoolIcons/Evocation2.jpg';
import Illusion from '../assets/img/schoolIcons/Illusion2.jpg';
import Necromancy from '../assets/img/schoolIcons/Necromancy2.jpg';
import Transmutation from '../assets/img/schoolIcons/Transmutation2.jpg';

export const switchCastingTime = (propsCastingTime) => {
  var castingTime;
  switch (propsCastingTime) {
    case '1 action':
      castingTime = 'ACTION';
      break;
    case '1 bonus action':
      castingTime = 'BONUS ACTION';
      break;
    case '1 reaction':
      castingTime = 'REACTION';
      break;
    case '10 minutes':
      castingTime = '10 Minutes';
      break;
    case '1 minute':
      castingTime = '1 MINUTE';
      break;
    case '24 hours':
      castingTime = '24 HOURS';
      break;
    case '1 hour':
      castingTime = '1 HOUR';
      break;
    default:
  }
  return castingTime;
};

export const switchChannelDivinityCasts = (propsPlayerLevel) => {
  let ChannelDivinityCasts;
  switch (propsPlayerLevel) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      ChannelDivinityCasts = '1';
      break;
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case '11':
    case '12':
    case '13':
    case '14':
    case '15':
    case '16':
    case '17':
      ChannelDivinityCasts = '2';
      break;
    case '18':
    case '19':
    case '20':
      ChannelDivinityCasts = '3';
      break;
    default:
  }
  return ChannelDivinityCasts;
};

export const switchSpellLevel = (propsPlayerLevel) => {
  let spellLevel;
  switch (propsPlayerLevel) {
    case '1':
    case '2':
      spellLevel = '1';
      break;
    case '3':
    case '4':
      spellLevel = '2';
      break;
    case '5':
    case '6':
      spellLevel = '3';
      break;
    case '7':
    case '8':
      spellLevel = '4';
      break;
    case '9':
    case '10':
      spellLevel = '5';
      break;
    case '11':
    case '12':
      spellLevel = '6';
      break;
    case '13':
    case '14':
      spellLevel = '7';
      break;
    case '15':
    case '16':
      spellLevel = '8';
      break;
    case '17':
    case '18':
    case '19':
    case '20':
      spellLevel = '9';
      break;
    default:
  }
  return spellLevel;
};

export const switchSpellSchool = (propsSpellSchool) => {
  var school;
  switch (propsSpellSchool) {
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
  return school;
};
