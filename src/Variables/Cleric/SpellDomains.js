import {
  GiScrollUnfurled,
  GiHospitalCross,
  GiSun,
  GiOakLeaf,
  GiLightningHelix,
  GiDualityMask,
  GiVerticalBanner,
} from 'react-icons/gi';

export const domains = [
  //knowledge
  [
    { domain: 'Knowledge', icon: <GiScrollUnfurled /> },
    // lvl 1
    [
      {
        index: 'command',
        name: 'Command',
        desc: [
          "You speak a one-word command to a creature you can see within range. The target must succeed on a wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.",
          "Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.",
          'Approach.',
          'The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.',
          'Drop',
          'The target drops whatever it is holding and then ends its turn.',
          'Flee.',
          'The target spends its turn moving away from you by the fastest available means.',
          'Grovel.',
          'The target falls prone and then ends its turn.',
          'Halt.',
          "The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.',
        ],
        range: '60 feet',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: '1 round',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/command',
      },
      {
        index: 'identify',
        name: 'Identify',
        desc: [
          'You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.',
          'If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.',
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material: 'A pearl worth at least 100gp and an owl feather.',
        domain: true,
        ritual: true,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 minute',
        level: 1,
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
      },
    ],
    // lvl 3
    [
      {
        index: 'augury',
        name: 'Augury',
        desc: [
          'By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:',
          '- Weal, for good results',
          '- Woe, for bad results',
          '- Weal and woe, for both good and bad results',
          "- Nothing, for results that aren't especially good or bad",
          "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
          'If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.',
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material:
          'Specially marked sticks, bones, or similar tokens worth at least 25gp.',
        domain: true,
        ritual: true,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 minute',
        level: 2,
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/augury',
      },
      {
        index: 'suggestion',
        name: 'Suggestion',
        desc: [
          "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.",
          'The target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.',
          "You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.",
          'If you or any of your companions damage the target, the spell ends.',
        ],
        range: '30 feet',
        components: ['V', 'M'],
        material:
          "A snake's tongue and either a bit of honeycomb or a drop of sweet oil.",
        domain: true,
        ritual: false,
        duration: 'Up to 8 hours',
        concentration: true,
        casting_time: '1 action',
        level: 2,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/suggestion',
      },
    ],
    // lvl 5
    [
      {
        index: 'nondetection',
        name: 'Nondetection',
        desc: [
          "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors.",
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material:
          'A pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes.',
        domain: true,
        ritual: false,
        duration: '8 hours',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/nondetection',
      },
      {
        index: 'speak-with-dead',
        name: 'Speak with Dead',
        desc: [
          "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.",
          "Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.",
        ],
        range: '10 feet',
        components: ['V', 'S', 'M'],
        material: 'Burning incense.',
        domain: true,
        ritual: false,
        duration: '10 minutes',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'necromancy',
          name: 'Necromancy',
          url: '/api/magic-schools/necromancy',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/speak-with-dead',
      },
    ],
    // lvl 7
    [
      {
        index: 'arcane-eye',
        name: 'Arcane Eye',
        desc: [
          'You create an invisible, magical eye within range that hovers in the air for the duration.',
          'You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.',
          "As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
        ],
        range: '30 feet',
        components: ['V', 'S', 'M'],
        material: 'A bit of bat fur.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        area_of_effect: {
          type: 'sphere',
          size: 30,
        },
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/arcane-eye',
      },
      {
        index: 'confusion',
        name: 'Confusion',
        desc: [
          'This spell assails and distorts the minds of creatures, generating illusions and causing uncontrolled actions. Each creature in a sphere of 10-foot-radius centered on a point chosen in the range of the spell must make a wisdom saving throw otherwise it will be affected by the spell.',
          'An affected target can react and it must start at the beginning of 1d10 each of his game rounds to determine its behavior for that round.',
          'At the end of each turn, an affected creature can make a saving throw of Wisdom. If successful, the effect of the spell ends for this target.',
        ],
        higher_level: [
          'When you cast this spell using a level spell slot 5 or more, the radius of the sphere increases by 5 feet for each level of higher spell slot to 4.',
        ],
        range: '90 feet',
        components: ['V', 'S', 'M'],
        material: 'Three walnut shells.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        area_of_effect: {
          type: 'sphere',
          size: 10,
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/confusion',
      },
    ],
    // lvl 9
    [
      {
        index: 'legend-lore',
        name: 'Legend Lore',
        desc: [
          "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.",
          'The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand the spell might yield this information: "Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips."',
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material:
          'Incense worth 250 inches that fate consumes and four sticks of ivory worth 50 gp each.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '10 minutes',
        level: 5,
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/legend-lore',
      },
      {
        index: 'scrying',
        name: 'Scrying',
        desc: [
          "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
          'Knowledge & Save Modifier',
          'Secondhand (you have heard of the target) +5',
          'Firsthand (you have met the target) +0',
          'Familiar (you know the target well) -5',
          'Connection & Save Modifier',
          'Likeness or picture -2',
          'Possession or garment -4',
          'Body part, lock of hair, bit of nail, or the like -10',
          "On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.",
          'On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.',
          "Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.",
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material:
          'A focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '10 minutes',
        level: 5,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/scrying',
      },
    ],
  ],
  //life
  [
    { domain: 'Life', icon: <GiHospitalCross /> },
    [
      {
        index: 'bless',
        name: 'Bless',
        desc: [
          'You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.',
        ],
        range: '30 feet',
        components: ['V', 'S', 'M'],
        material: 'A sprinkling of holy water.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 1,
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/bless',
      },
      {
        index: 'cure-wounds',
        name: 'Cure Wounds',
        desc: [
          'A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.',
        ],
        range: 'Touch',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        heal_at_slot_level: {
          1: '1d8 + MOD',
          2: '2d8 + MOD',
          3: '3d8 + MOD',
          4: '4d8 + MOD',
          5: '5d8 + MOD',
          6: '6d8 + MOD',
          7: '7d8 + MOD',
          8: '8d8 + MOD',
          9: '9d8 + MOD',
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/cure-wounds',
      },
    ],
    [
      {
        index: 'lesser-restoration',
        name: 'Lesser Restoration',
        desc: [
          'You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.',
        ],
        range: 'Touch',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 2,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
          {
            index: 'devotion',
            name: 'Devotion',
            url: '/api/subclasses/devotion',
          },
        ],
        url: '/api/spells/lesser-restoration',
      },
      {
        index: 'spiritual-weapon',
        name: 'Spiritual Weapon',
        desc: [
          'You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.',
          'As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.',
          "The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.',
        ],
        range: '60 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 minute',
        concentration: false,
        casting_time: '1 bonus action',
        level: 2,
        attack_type: 'melee',
        damage: {
          damage_type: {
            index: 'force',
            name: 'Force',
            url: '/api/damage-types/force',
          },
          damage_at_slot_level: {
            2: '1d8 + MOD',
            3: '1d8 + MOD',
            4: '2d8 + MOD',
            5: '2d8 + MOD',
            6: '3d8 + MOD',
            7: '3d8 + MOD',
            8: '4d8 + MOD',
            9: '4d8 + MOD',
          },
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/spiritual-weapon',
      },
    ],
    [
      {
        index: 'beacon-of-hope',
        name: 'Beacon of Hope',
        desc: [
          'This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.',
        ],
        range: '30 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
          {
            index: 'devotion',
            name: 'Devotion',
            url: '/api/subclasses/devotion',
          },
        ],
        url: '/api/spells/beacon-of-hope',
      },
      {
        index: 'revivify',
        name: 'Revivify',
        desc: [
          "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.",
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material: 'Diamonds worth 300gp, which the spell consumes.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/revivify',
      },
    ],
    [
      {
        index: 'death-ward',
        name: 'Death Ward',
        desc: [
          'You touch a creature and grant it a measure of protection from death.',
          'The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.',
          'If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.',
        ],
        range: 'Touch',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '8 hours',
        concentration: false,
        casting_time: '1 action',
        level: 4,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/death-ward',
      },
      {
        index: 'guardian-of-faith',
        name: 'Guardian of Faith',
        desc: [
          'A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.',
          'Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.',
        ],
        range: '30 feet',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: '8 hours',
        concentration: false,
        casting_time: '1 action',
        level: 4,
        damage: {
          damage_type: {
            index: 'radiant',
            name: 'Radiant',
            url: '/api/damage-types/radiant',
          },
          damage_at_slot_level: {
            4: '20',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cylinder',
          size: 10,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [],
        url: '/api/spells/guardian-of-faith',
      },
    ],
    [
      {
        index: 'mass-cure-wounds',
        name: 'Mass Cure Wounds',
        desc: [
          'A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.',
        ],
        range: '60 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 5,
        attack_type: 'ranged',
        heal_at_slot_level: {
          5: '3d8 + MOD',
          6: '4d8 + MOD',
          7: '5d8 + MOD',
          8: '6d8 + MOD',
          9: '7d8 + MOD',
        },
        area_of_effect: {
          type: 'sphere',
          size: 30,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
        ],
        subclasses: [
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/mass-cure-wounds',
      },
      {
        index: 'raise-dead',
        name: 'Raise Dead',
        desc: [
          "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.",
          "This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life.",
          "This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival--its head, for instance--the spell automatically fails.",
          'Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.',
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material: 'A diamond worth at least 500gp, which the spell consumes.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 hour',
        level: 5,
        school: {
          index: 'necromancy',
          name: 'Necromancy',
          url: '/api/magic-schools/necromancy',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/raise-dead',
      },
    ],
  ],
  //light
  [
    { domain: 'Light', icon: <GiSun /> },
    [
      {
        index: 'burning-hands',
        name: 'Burning Hands',
        desc: [
          'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.',
          "The fire ignites any flammable objects in the area that aren't being worn or carried.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            1: '3d6',
            2: '4d6',
            3: '5d6',
            4: '6d6',
            5: '7d6',
            6: '8d6',
            7: '9d6',
            8: '10d6',
            9: '11d6',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cone',
          size: 15,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/burning-hands',
      },
      {
        index: 'faerie-fire',
        name: 'Faerie Fire',
        desc: [
          'Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.',
          "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
        ],
        range: '60 feet',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 1,
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'none',
        },
        area_of_effect: {
          type: 'cube',
          size: 20,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/faerie-fire',
      },
    ],
    [
      {
        index: 'flaming-sphere',
        name: 'Flaming Sphere',
        desc: [
          'A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.',
          "As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.",
          'When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.',
        ],
        range: '60 feet',
        components: ['V', 'S', 'M'],
        material:
          'A bit of tallow, a pinch of brimstone, and a dusting of powdered iron.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 2,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            2: '2d6',
            3: '3d6',
            4: '4d6',
            5: '5d6',
            6: '6d6',
            7: '7d6',
            8: '8d6',
            9: '9d6',
          },
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/flaming-sphere',
      },
      {
        index: 'scorching-ray',
        name: 'Scorching Ray',
        desc: [
          'You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.',
          'Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.',
        ],
        range: '120 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 2,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            2: '2d6',
          },
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/scorching-ray',
      },
    ],
    [
      {
        index: 'daylight',
        name: 'Daylight',
        desc: [
          'A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.',
          "If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.",
          "If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.",
        ],
        range: '60 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 hour',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        area_of_effect: {
          type: 'sphere',
          size: 60,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/daylight',
      },
      {
        index: 'fireball',
        name: 'Fireball',
        desc: [
          'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.',
          "The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.',
        ],
        range: '150 feet',
        components: ['V', 'S', 'M'],
        material: 'A tiny ball of bat guano and sulfur.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            3: '8d6',
            4: '9d6',
            5: '10d6',
            6: '11d6',
            7: '12d6',
            8: '13d6',
            9: '14d6',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'sphere',
          size: 20,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/fireball',
      },
    ],
    [
      {
        index: 'guardian-of-faith',
        name: 'Guardian of Faith',
        desc: [
          'A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.',
          'Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.',
        ],
        range: '30 feet',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: '8 hours',
        concentration: false,
        casting_time: '1 action',
        level: 4,
        damage: {
          damage_type: {
            index: 'radiant',
            name: 'Radiant',
            url: '/api/damage-types/radiant',
          },
          damage_at_slot_level: {
            4: '20',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cylinder',
          size: 10,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [],
        url: '/api/spells/guardian-of-faith',
      },
      {
        index: 'wall-of-fire',
        name: 'Wall of Fire',
        desc: [
          'You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.',
          'When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.',
          'One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet o f that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side o f the wall deals no damage.',
          'The other side of the wall deals no damage.',
        ],
        higher_level: [
          'When you cast this spell using a level spell slot 5 or more, the damage of the spell increases by 1d8 for each level of higher spell slot to 4.',
        ],
        range: '120 feet',
        components: ['V', 'S', 'M'],
        material: 'A small piece of phosphorus.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            4: '5d8',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'line',
          size: 60,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/wall-of-fire',
      },
    ],
    [
      {
        index: 'flame-strike',
        name: 'Flame Strike',
        desc: [
          'A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.',
        ],
        range: '60 feet',
        components: ['V', 'S', 'M'],
        material: 'Pinch of sulfur.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 5,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            5: '4d6 + 4d6',
            6: '4d6 + 5d6',
            7: '4d6 + 6d6',
            8: '4d6 + 7d6',
            9: '4d6 + 8d6',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cylinder',
          size: 40,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'devotion',
            name: 'Devotion',
            url: '/api/subclasses/devotion',
          },
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/flame-strike',
      },
      {
        index: 'scrying',
        name: 'Scrying',
        desc: [
          "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
          'Knowledge & Save Modifier',
          'Secondhand (you have heard of the target) +5',
          'Firsthand (you have met the target) +0',
          'Familiar (you know the target well) -5',
          'Connection & Save Modifier',
          'Likeness or picture -2',
          'Possession or garment -4',
          'Body part, lock of hair, bit of nail, or the like -10',
          "On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.",
          'On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.',
          "Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.",
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material:
          'A focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '10 minutes',
        level: 5,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/scrying',
      },
    ],
  ],
  //nature
  [
    { domain: 'Nature', icon: <GiOakLeaf /> },
    [
      {
        index: 'animal-friendship',
        name: 'Animal Friendship',
        desc: [
          "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.",
        ],
        range: '30 feet',
        components: ['V', 'S', 'M'],
        material: 'A morsel of food.',
        domain: true,
        ritual: false,
        duration: '24 hours',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [],
        url: '/api/spells/animal-friendship',
      },
      {
        index: 'speak-with-animals',
        name: 'Speak with Animals',
        desc: [
          "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.",
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: true,
        duration: '10 minutes',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        school: {
          index: 'divination',
          name: 'Divination',
          url: '/api/magic-schools/divination',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/speak-with-animals',
      },
    ],
    [
      {
        index: 'barkskin',
        name: 'Barkskin',
        desc: [
          "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.",
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material: 'A handful of oak bark.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 action',
        level: 2,
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/barkskin',
      },
      {
        index: 'spike-growth',
        name: 'Spike Growth',
        desc: [
          'The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.',
          'The development of land is camouflaged to look natural. Any creature that does not see the area when the spell is spell casts must make a Wisdom (Perception) opposite the DD backup your fate or it does not recognize the dangerous nature of the ground before entering.',
        ],
        range: '150 feet',
        components: ['V', 'S', 'M'],
        material: 'Seven sharp spines or seven twigs cut peak.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 action',
        level: 2,
        area_of_effect: {
          type: 'cylinder',
          size: 20,
        },
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/spike-growth',
      },
    ],
    [
      {
        index: 'plant-growth',
        name: 'Plant Growth',
        desc: [
          'This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.',
          'If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.',
          "You can exclude one or more areas of any size within the spell's area from being affected.",
          'If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.',
        ],
        range: '150 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/plant-growth',
      },
      {
        index: 'wind-wall',
        name: 'Wind Wall',
        desc: [
          'A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.',
          'When the wall appears, each creature within its area must make a strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.',
          "The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it.",
        ],
        range: '120 feet',
        components: ['V', 'S', 'M'],
        material: 'A tiny fan and a feather of exotic origin.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 3,
        damage: {
          damage_type: {
            index: 'bludgeoning',
            name: 'Bludgeoning',
            url: '/api/damage-types/bludgeoning',
          },
          damage_at_slot_level: {
            3: '3d8',
          },
        },
        dc: {
          dc_type: {
            index: 'str',
            name: 'STR',
            url: '/api/ability-scores/str',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'line',
          size: 50,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/wind-wall',
      },
    ],
    [
      {
        index: 'dominate-beast',
        name: 'Dominate Beast',
        desc: [
          'You attempt to beguile a creature that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.',
          'While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn\'t receive further direction from you, it defends and preserves itself to the best of its ability.',
          "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.",
        ],
        higher_level: [
          'When you cast this spell with a 9th level spell slot, the duration is concentration, up to 8 hours.',
        ],
        range: '60 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
        ],
        subclasses: [],
        url: '/api/spells/dominate-beast',
      },
      {
        index: 'grasping-vine',
        name: 'Grasping Vine',
        desc: [
          'You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.',
          'Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.',
        ],
        range: '30 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 bonus action',
        level: 4,
        dc: {
          dc_type: {
            index: 'dex',
            name: 'Dex',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'none',
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [],
        url: '/api/spells/grasping-vine',
      },
    ],
    [
      {
        index: 'insect-plague',
        name: 'Insect Plague',
        desc: [
          "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.",
          "When the area appears, each creature in it must make a constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.',
        ],
        range: '300 feet',
        components: ['V', 'S', 'M'],
        material:
          'A few grains of sugar, some kernels of grain, and a smear of fat.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 action',
        level: 5,
        damage: {
          damage_type: {
            index: 'piercing',
            name: 'Piercing',
            url: '/api/damage-types/piercing',
          },
          damage_at_slot_level: {
            5: '4d10',
            6: '5d10',
            7: '6d10',
            8: '7d10',
            9: '8d10',
          },
        },
        dc: {
          dc_type: {
            index: 'con',
            name: 'CON',
            url: '/api/ability-scores/con',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'sphere',
          size: 20,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/insect-plague',
      },
      {
        index: 'tree-stride',
        name: 'Tree Stride',
        desc: [
          "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.",
          'You can use this transportation ability once per round for the duration. You must end each turn outside a tree.',
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 5,
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/tree-stride',
      },
    ],
  ],
  //tempest
  [
    { domain: 'Tempest', icon: <GiLightningHelix /> },
    [
      {
        index: 'fog-cloud',
        name: 'Fog Cloud',
        desc: [
          'You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.',
        ],
        range: '120 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 action',
        level: 1,
        area_of_effect: {
          type: 'sphere',
          size: 20,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/fog-cloud',
      },
      {
        index: 'thunderwave',
        name: 'Thunderwave',
        desc: [
          "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.",
          "In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.',
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        damage: {
          damage_type: {
            index: 'thunder',
            name: 'Thunder',
            url: '/api/damage-types/thunder',
          },
          damage_at_slot_level: {
            1: '2d8',
            2: '3d8',
            3: '4d8',
            4: '5d8',
            5: '6d8',
            6: '7d8',
            7: '8d8',
            8: '9d8',
            9: '10d8',
          },
        },
        dc: {
          dc_type: {
            index: 'con',
            name: 'CON',
            url: '/api/ability-scores/con',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cube',
          size: 15,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/thunderwave',
      },
    ],
    [
      {
        index: 'gust-of-wind',
        name: 'Gust of Wind',
        desc: [
          "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a strength saving throw or be pushed 15 feet away from you in a direction following the line.",
          'Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.',
          'The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.',
          'As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.',
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material: 'A legume seed.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 2,
        dc: {
          dc_type: {
            index: 'str',
            name: 'STR',
            url: '/api/ability-scores/str',
          },
          dc_success: 'none',
        },
        area_of_effect: {
          type: 'line',
          size: 60,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/gust-of-wind',
      },
      {
        index: 'shatter',
        name: 'Shatter',
        desc: [
          'A strong resonant sound painfully intense sounds of a desired point in the range of the spell. Each creature has a sphere with a 10-foot-radius sphere centered on that point must make a constitution saving throw or it suffers 3d8 thunder damage. If successful, the damage is halved. A creature made of inorganic materials such as stone, crystal or metal, makes its saving throw with a disadvantage.',
          'A non-magical item that is not worn or carried also suffers damage if it is in the area of the spell.',
        ],
        higher_level: [
          'When you cast this spell using a 3 or higher level spell slot, the damage of the spell increases by 1d8 for each level of higher spell slot 2.',
        ],
        range: '60 feet',
        components: ['V', 'S', 'M'],
        material: 'A burst of mica.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 2,
        damage: {
          damage_type: {
            index: 'thunder',
            name: 'Thunder',
            url: '/api/damage-types/thunder',
          },
          damage_at_slot_level: {
            2: '3d8',
            3: '4d8',
            4: '5d8',
            5: '6d8',
            6: '7d8',
            7: '8d8',
            8: '9d8',
            9: '10d8',
          },
        },
        dc: {
          dc_type: {
            index: 'con',
            name: 'CON',
            url: '/api/ability-scores/con',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'sphere',
          size: 10,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/shatter',
      },
    ],
    [
      {
        index: 'call-lightning',
        name: 'Call Lightning',
        desc: [
          "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).",
          'When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.',
          "If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.',
        ],
        range: '120 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 action',
        level: 3,
        damage: {
          damage_type: {
            index: 'lightning',
            name: 'Lightning',
            url: '/api/damage-types/lightning',
          },
          damage_at_slot_level: {
            3: '3d10',
            4: '4d10',
            5: '5d10',
            6: '6d10',
            7: '7d10',
            8: '8d10',
            9: '9d10',
          },
        },
        area_of_effect: {
          type: 'sphere',
          size: 5,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/call-lightning',
      },
      {
        index: 'sleet-storm',
        name: 'Sleet Storm',
        desc: [
          'Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.',
          "The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a dexterity saving throw. On a failed save, it falls prone.",
          "If a creature is concentrating in the spell's area, the creature must make a successful constitution saving throw against your spell save DC or lose concentration.",
        ],
        range: '150 feet',
        components: ['V', 'S', 'M'],
        material: 'A pinch of dust and a few drops of water.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 3,
        area_of_effect: {
          type: 'cylinder',
          size: 40,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/sleet-storm',
      },
    ],
    [
      {
        index: 'control-water',
        name: 'Control Water',
        desc: [
          'Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.',
          'Flood.',
          'You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land.',
          "instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.",
          'The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.',
          'Part Water.',
          "You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.",
          'Redirect Flow.',
          "You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.",
          'Whirlpool.',
          'This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC.',
          "When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.",
          'The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex.',
        ],
        range: '300 feet',
        components: ['V', 'S', 'M'],
        material: 'A drop of water and a pinch of dust.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        damage: {
          damage_type: {
            index: 'bludgeoning',
            name: 'Bludgeoning',
            url: '/api/damage-types/bludgeoning',
          },
          damage_at_slot_level: {
            4: '2d8',
          },
        },
        dc: {
          dc_type: {
            index: 'str',
            name: 'STR',
            url: '/api/ability-scores/str',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cube',
          size: 100,
        },
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/control-water',
      },
      {
        index: 'ice-storm',
        name: 'Ice Storm',
        desc: [
          'A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.',
          "Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.',
        ],
        range: '300 feet',
        components: ['V', 'S', 'M'],
        material: 'A pinch of dust and a few drops of water.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 4,
        damage: {
          damage_type: {
            index: 'bludgeoning',
            name: 'Bludgeoning',
            url: '/api/damage-types/bludgeoning',
          },
          damage_at_slot_level: {
            4: '2d8 + 4d6',
            5: '3d8 + 4d6',
            6: '4d8 + 4d6',
            7: '5d8 + 4d6',
            8: '6d8 + 4d6',
            9: '7d8 + 4d6',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cylinder',
          size: 20,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/ice-storm',
      },
    ],
    [
      {
        index: 'destructive-wave',
        name: 'Destructive Wave',
        desc: [
          'You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.',
        ],
        range: 'Self',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 5,
        dc: {
          dc_type: {
            index: 'con',
            name: 'CON',
            url: '/api/ability-scores/con',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'sphere',
          size: 30,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        url: '/api/spells/destructive-wave',
      },
      {
        index: 'insect-plague',
        name: 'Insect Plague',
        desc: [
          "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.",
          "When the area appears, each creature in it must make a constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.',
        ],
        range: '300 feet',
        components: ['V', 'S', 'M'],
        material:
          'A few grains of sugar, some kernels of grain, and a smear of fat.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 action',
        level: 5,
        damage: {
          damage_type: {
            index: 'piercing',
            name: 'Piercing',
            url: '/api/damage-types/piercing',
          },
          damage_at_slot_level: {
            5: '4d10',
            6: '5d10',
            7: '6d10',
            8: '7d10',
            9: '8d10',
          },
        },
        dc: {
          dc_type: {
            index: 'con',
            name: 'CON',
            url: '/api/ability-scores/con',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'sphere',
          size: 20,
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/insect-plague',
      },
    ],
  ],
  //trickery
  [
    { domain: 'Trickery', icon: <GiDualityMask /> },
    [
      {
        index: 'charm-person',
        name: 'Charm Person',
        desc: [
          'You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.',
        ],
        range: '30 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 hour',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/charm-person',
      },
      {
        index: 'disguise-self',
        name: 'Disguise Self',
        desc: [
          "You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.",
          'The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.',
          'To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.',
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 hour',
        concentration: false,
        casting_time: '1 action',
        level: 1,
        school: {
          index: 'illusion',
          name: 'Illusion',
          url: '/api/magic-schools/illusion',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/disguise-self',
      },
    ],
    [
      {
        index: 'mirror-image',
        name: 'Mirror Image',
        desc: [
          'Three illusionary duplicates of yourself appear in your space. Until the end of the spell, duplicates move with you and imitate your actions, swapping their position so that it is impossible to determine which image is real. You can use your action to dispel the illusory duplicates.',
          'Whenever a creature is targeting you with an attack during the duration of the spell, roll 1d20 to determine if the attack does not target rather one of your duplicates.',
          'If you have three duplicates, you need 6 or more on your throw to lead the target of the attack to a duplicate. With two duplicates, you need 8 or more. With one duplicate, you need 11 or more.',
          'The CA of a duplicate is 10 + your Dexterity modifier. If an attack hits a duplicate, it is destroyed. A duplicate may be destroyed not just an attack on key. It ignores other damage and effects. The spell ends if the three duplicates are destroyed.',
          'A creature is unaffected by this fate if she can not see if it relies on a different meaning as vision, such as blind vision, or if it can perceive illusions as false, as with clear vision.',
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 minute',
        concentration: false,
        casting_time: '1 action',
        level: 2,
        school: {
          index: 'illusion',
          name: 'Illusion',
          url: '/api/magic-schools/illusion',
        },
        classes: [
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/mirror-image',
      },
      {
        index: 'pass-without-trace',
        name: 'Pass Without Trace',
        desc: [
          "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material:
          'Ashes from a burned leaf of mistletoe and a sprig of spruce.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 action',
        level: 2,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/pass-without-trace',
      },
    ],
    [
      {
        index: 'blink',
        name: 'Blink',
        desc: [
          'Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.',
          "While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so.",
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 minute',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/blink',
      },
      {
        index: 'dispel-magic',
        name: 'Dispel Magic',
        desc: [
          "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.",
        ],
        higher_level: [
          "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
        ],
        range: '120 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'devotion',
            name: 'Devotion',
            url: '/api/subclasses/devotion',
          },
        ],
        url: '/api/spells/dispel-magic',
      },
    ],
    [
      {
        index: 'dimension-door',
        name: 'Dimension Door',
        desc: [
          'You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as "200 feet straight downward" or "upward to the northwest at a 45-degree angle, 300 feet."',
          "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.",
          'If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.',
        ],
        range: '500 feet',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 4,
        damage: {
          damage_type: {
            index: 'force',
            name: 'Force',
            url: '/api/damage-types/force',
          },
          damage_at_slot_level: {
            4: '4d6',
          },
        },
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/dimension-door',
      },
      {
        index: 'polymorph',
        name: 'Polymorph',
        desc: [
          'This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.',
          "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.",
          "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.",
          "The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech.",
          "The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.",
        ],
        range: '60 feet',
        components: ['V', 'S', 'M'],
        material: 'A caterpillar cocoon.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/polymorph',
      },
    ],
    [
      {
        index: 'dominate-person',
        name: 'Dominate Person',
        desc: [
          'You attempt to beguile a humanoid that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.',
          'While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn\'t receive further direction from you, it defends and preserves itself to the best of its ability.',
          "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
          'Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.',
        ],
        higher_level: [
          'When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.',
        ],
        range: '60 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 5,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'other',
          desc: 'Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/dominate-person',
      },
      {
        index: 'modify-memory',
        name: 'Modify Memory',
        desc: [
          "You attempt to reshape another creature's memories. One creature that you can see must make a wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.",
          "While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.",
          "You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.",
          "A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.",
          "A remove curse or greater restoration spell cast on the target restores the creature's true memory.",
        ],
        higher_level: [
          "If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).",
        ],
        range: '30 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 5,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/modify-memory',
      },
    ],
  ],
  //war
  [
    { domain: 'War', icon: <GiVerticalBanner /> },
    [
      {
        index: 'divine-favor',
        name: 'Divine Favor',
        desc: [
          'Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.',
        ],
        range: 'Self',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 bonus action',
        level: 1,
        damage: {
          damage_type: {
            index: 'radiant',
            name: 'Radiant',
            url: '/api/damage-types/radiant',
          },
          damage_at_slot_level: {
            1: '1d4',
          },
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/divine-favor',
      },
      {
        index: 'shield-of-faith',
        name: 'Shield of Faith',
        desc: [
          'A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.',
        ],
        range: '60 feet',
        components: ['V', 'S', 'M'],
        material: 'A small parchment with a bit of holy text written on it.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 bonus action',
        level: 1,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/shield-of-faith',
      },
    ],
    [
      {
        index: 'magic-weapon',
        name: 'Magic Weapon',
        desc: [
          'You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.',
        ],
        range: 'Touch',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 bonus action',
        level: 2,
        school: {
          index: 'transmutation',
          name: 'Transmutation',
          url: '/api/magic-schools/transmutation',
        },
        classes: [
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/magic-weapon',
      },
      {
        index: 'spiritual-weapon',
        name: 'Spiritual Weapon',
        desc: [
          'You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.',
          'As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.',
          "The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.',
        ],
        range: '60 feet',
        components: ['V', 'S'],
        domain: true,
        ritual: false,
        duration: '1 minute',
        concentration: false,
        casting_time: '1 bonus action',
        level: 2,
        attack_type: 'melee',
        damage: {
          damage_type: {
            index: 'force',
            name: 'Force',
            url: '/api/damage-types/force',
          },
          damage_at_slot_level: {
            2: '1d8 + MOD',
            3: '1d8 + MOD',
            4: '2d8 + MOD',
            5: '2d8 + MOD',
            6: '3d8 + MOD',
            7: '3d8 + MOD',
            8: '4d8 + MOD',
            9: '4d8 + MOD',
          },
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
          {
            index: 'life',
            name: 'Life',
            url: '/api/subclasses/life',
          },
        ],
        url: '/api/spells/spiritual-weapon',
      },
    ],
    [
      {
        index: 'crusaders-mantle',
        name: 'Crusaders Mantle',
        desc: [
          'Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.',
        ],
        range: 'self',
        components: ['V'],
        domain: true,
        ritual: false,
        duration: '1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 3,
        attack_type: 'melee',
        damage: {
          damage_type: {
            index: 'radiant',
            name: 'Radiant',
            url: '/api/damage-types/radiant',
          },
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'paladin',
            name: 'Paladin',
            url: '/api/classes/paladin',
          },
        ],

        url: '/api/spells/crusaders-mantle',
      },
      {
        index: 'spirit-guardians',
        name: 'Spirit Guardians',
        desc: [
          'You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.',
          "When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.",
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.',
        ],
        range: 'Self',
        components: ['V', 'S', 'M'],
        material: 'A holy symbol.',
        domain: true,
        ritual: false,
        duration: 'Up to 10 minutes',
        concentration: true,
        casting_time: '1 action',
        level: 3,
        school: {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'lore',
            name: 'Lore',
            url: '/api/subclasses/lore',
          },
        ],
        url: '/api/spells/spirit-guardians',
      },
    ],
    [
      {
        index: 'freedom-of-movement',
        name: 'Freedom of Movement',
        desc: [
          "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.",
          "The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks.",
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material:
          'A leather strap, bound around the arm or a similar appendage.',
        domain: true,
        ritual: false,
        duration: '1 hour',
        concentration: false,
        casting_time: '1 action',
        level: 4,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
          {
            index: 'devotion',
            name: 'Devotion',
            url: '/api/subclasses/devotion',
          },
        ],
        url: '/api/spells/freedom-of-movement',
      },
      {
        index: 'stoneskin',
        name: 'Stoneskin',
        desc: [
          'This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.',
        ],
        range: 'Touch',
        components: ['V', 'S', 'M'],
        material: 'Diamond dust worth 100 gp, which the spell consumes.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 hour',
        concentration: true,
        casting_time: '1 action',
        level: 4,
        school: {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration',
        },
        classes: [
          {
            index: 'druid',
            name: 'Druid',
            url: '/api/classes/druid',
          },
          {
            index: 'ranger',
            name: 'Ranger',
            url: '/api/classes/ranger',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [
          {
            index: 'land',
            name: 'Land',
            url: '/api/subclasses/land',
          },
        ],
        url: '/api/spells/stoneskin',
      },
    ],
    [
      {
        index: 'flame-strike',
        name: 'Flame Strike',
        desc: [
          'A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.',
        ],
        higher_level: [
          'When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.',
        ],
        range: '60 feet',
        components: ['V', 'S', 'M'],
        material: 'Pinch of sulfur.',
        domain: true,
        ritual: false,
        duration: 'Instantaneous',
        concentration: false,
        casting_time: '1 action',
        level: 5,
        damage: {
          damage_type: {
            index: 'fire',
            name: 'Fire',
            url: '/api/damage-types/fire',
          },
          damage_at_slot_level: {
            5: '4d6 + 4d6',
            6: '4d6 + 5d6',
            7: '4d6 + 6d6',
            8: '4d6 + 7d6',
            9: '4d6 + 8d6',
          },
        },
        dc: {
          dc_type: {
            index: 'dex',
            name: 'DEX',
            url: '/api/ability-scores/dex',
          },
          dc_success: 'half',
        },
        area_of_effect: {
          type: 'cylinder',
          size: 40,
        },
        school: {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/magic-schools/evocation',
        },
        classes: [
          {
            index: 'cleric',
            name: 'Cleric',
            url: '/api/classes/cleric',
          },
        ],
        subclasses: [
          {
            index: 'devotion',
            name: 'Devotion',
            url: '/api/subclasses/devotion',
          },
          {
            index: 'fiend',
            name: 'Fiend',
            url: '/api/subclasses/fiend',
          },
        ],
        url: '/api/spells/flame-strike',
      },
      {
        index: 'hold-monster',
        name: 'Hold Monster',
        desc: [
          'Choose a creature you can see and reach. The target must make a saving throw of Wisdom or be paralyzed for the duration of the spell. This spell has no effect against the undead. At the end of each round, the target can make a new saving throw of Wisdom. If successful, the spell ends for the creature.',
        ],
        higher_level: [
          'When you cast this spell using a level 6 or higher location, you can target an additional creature for each level of location beyond the fifth. The creatures must be within 30 feet o f each other when you target them.',
        ],
        range: '90 feet',
        components: ['V', 'S', 'M'],
        material: 'A small piece of iron.',
        domain: true,
        ritual: false,
        duration: 'Up to 1 minute',
        concentration: true,
        casting_time: '1 action',
        level: 5,
        dc: {
          dc_type: {
            index: 'wis',
            name: 'WIS',
            url: '/api/ability-scores/wis',
          },
          dc_success: 'none',
        },
        school: {
          index: 'enchantment',
          name: 'Enchantment',
          url: '/api/magic-schools/enchantment',
        },
        classes: [
          {
            index: 'bard',
            name: 'Bard',
            url: '/api/classes/bard',
          },
          {
            index: 'sorcerer',
            name: 'Sorcerer',
            url: '/api/classes/sorcerer',
          },
          {
            index: 'warlock',
            name: 'Warlock',
            url: '/api/classes/warlock',
          },
          {
            index: 'wizard',
            name: 'Wizard',
            url: '/api/classes/wizard',
          },
        ],
        subclasses: [],
        url: '/api/spells/hold-monster',
      },
    ],
  ],
];
