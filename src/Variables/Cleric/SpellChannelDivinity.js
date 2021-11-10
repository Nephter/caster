export const channelDivinity = [
  {
    index: 'turn-undead',
    name: 'Turn Undead',
    desc: [
      'As an action, you present your holy Symbol and speak a prayer censuring the Undead. Each Undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.',
      "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take Reactions. For its action, it can use only the Dash action or try to Escape from an Effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
    ],
    higher_level: [
      'Starting at 5th Level, when an Undead of CR 1/2 or lower fails its saving throw against Your Turn Undead feature, the creature is instantly destroyed.',
    ],
    range: '30 feet',
    components: ['V', 'S'],
    ritual: false,
    duration: '1 minute or until it takes damage',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  //knowledge
  [
    { domain: 'Knowledge' },
    {
      index: 'knowledge-of-the-ages',
      name: 'Knowledge of the Ages',
      desc: [
        'You use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.',
      ],
      range: 'Self',
      duration: '10 minutes',
      casting_time: '1 action',
      level: 2,
    },
    {
      index: 'read-thoughts',
      name: 'Read Thoughts',
      desc: [
        "You use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
        "As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
        'If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.',
        'During that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.',
      ],
      range: '60 feet',
      duration: '1 minute',
      casting_time: '1 action',
      level: 6,
    },
    {
      index: 'visions-of-the-past',
      name: 'Visions of the Past',
      desc: [
        'You call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.',
        "Once you use this feature, you can't use it again until you finish a short or long rest.",
        "Object Reading. Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.",
        'Area Reading. As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.',
      ],
      range: 'Self',
      duration: 'Atleast 1 minute',
      casting_time: '1 minute',
      level: 6,
    },
  ],
  //life
  [
    { domain: 'Life' },
    {
      index: 'preserve-life',
      name: 'Preserve Life',
      desc: [
        "As an action, you use your Channel Divinity, present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
      ],
      range: '30 feet',
      duration: 'Instantaneous',
      casting_time: '1 action',
      level: 2,
    },
  ],
  //light
  [
    { domain: 'Light' },
    {
      index: 'light',
      name: 'Light',
      desc: [
        'You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.',
        'If you target an object held or worn by a hostile creature, that creature must succeed on a dexterity saving throw to avoid the spell.',
      ],
      range: 'Touch',
      components: ['V', 'M'],
      material: 'A firefly or phosphorescent moss.',
      duration: '1 hour',
      casting_time: '1 action',
      level: 1,
    },
    {
      index: 'warding-flare',
      name: 'Warding Flare',
      desc: [
        "You interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.",
        'You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
      ],
      higher_level: [
        'Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.',
      ],
      range: '30 feet',
      duration: 'Instantaneous',
      casting_time: '1 reaction',
      level: 1,
    },
    {
      index: 'radiance-of-the-Dawn',
      name: 'Radiance of the Dawn',
      desc: [
        'You use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.',
        'As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.',
      ],
      range: '30 feet',
      components: 'Holy Symbol',
      duration: 'Instantaneous',
      casting_time: '1 action',
      level: 2,
    },
    {
      index: 'corona-of-light',
      name: 'Corona of Light',
      desc: [
        'You use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.',
      ],
      range: '90 feet',
      duration: '1 minute',
      casting_time: '1 action',
      level: 17,
    },
  ],
  //nature
  [
    { domain: 'Nature' },
    {
      index: 'charm-animals-and-plants',
      name: 'Charm Animals and Plants',
      desc: [
        'As an action, you use your Channel Divinity, present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.',
      ],
      range: '30 feet',
      components: ['V', 'Holy Symbol'],
      duration: '1 minute',
      casting_time: '1 action',
      level: 2,
    },
    {
      index: 'dampen-elements',
      name: 'Dampen Elements',
      desc: [
        'When you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.',
      ],
      range: '30 feet',
      duration: 'Instantaneous',
      casting_time: '1 reaction',
      level: 6,
    },
    {
      index: 'divine-strike',
      name: 'Divine Strike',
      desc: [
        'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target.',
      ],
      higher_level: [
        'When you reach 14th level, the extra damage increases to 2d8.',
      ],
      range: 'Self',
      duration: 'Instantaneous',
      casting_time: 'Once Per Turn',
      level: 8,
    },
    {
      index: 'master-of-nature',
      name: 'Master of Nature',
      desc: [
        'You gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.',
      ],
      range: '60 feet',
      components: ['V'],
      duration: '1 round',
      level: 17,
    },
  ],
  //tempest
  [
    { domain: 'Tempest' },
    {
      index: 'wrath-of-the-storm',
      name: 'Wrath of the Storm',
      desc: [
        'You can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.',
        'You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
      ],
      range: '5 feet',
      components: ['V'],
      duration: 'Instantaneous',
      casting_time: '1 reaction',
      level: 1,
    },
    {
      index: 'destructive-wrath',
      name: 'Destructive Wrath',
      desc: [
        'You use your Channel Divinity to wield the power of the storm with unchecked ferocity.',
        'When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.',
      ],
      range: 'Variable',
      duration: 'Instantaneous',
      level: 2,
    },
    {
      index: 'divine-strike',
      name: 'Divine Strike',
      desc: [
        'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target.',
      ],
      higher_level: [
        'When you reach 14th level, the extra damage increases to 2d8.',
      ],
      range: "Weapon's Range",
      duration: 'Instantaneous',
      level: 8,
    },
  ],
  //trickery
  [
    { domain: 'Trickery' },
    {
      index: 'blessing-of-the-trickster',
      name: 'Blessing of the Trickster',
      desc: [
        'You use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.',
      ],
      range: 'Touch',
      duration: '1 hour',
      casting_time: '1 action',
      level: 1,
    },
    {
      index: 'invoke-duplicity',
      name: 'Invoke Duplicity',
      desc: [
        'As an action, you use your Channel Divinity to create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.',
        "For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.",
      ],
      higher_level: [
        'At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.',
      ],
      range: '30 feet',
      duration: '1 minute',
      casting_time: '1 action',
      level: 2,
    },
    {
      index: 'cloak-of-shadows',
      name: 'Cloak of Shadows',
      desc: [
        'As an action, you use of Channel Divinity to become invisible until the end of your next turn. You become visible if you attack or cast a spell.',
      ],
      range: 'Self',
      duration: 'Until end of your next turn',
      casting_time: '1 action',
      level: 6,
    },
    {
      index: 'divine-strike',
      name: 'Divine Strike',
      desc: [
        'You gain the ability to infuse your weapon strikes with poison – a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target.',
      ],
      higher_level: [
        'When you reach 14th level, the extra damage increases to 2d8.',
      ],
      range: "Weapon's Range",
      duration: 'Instantaneous',
      casting_time: 'Once Per Turn',
      level: 8,
    },
  ],
  //war
  [
    { domain: 'War' },
    {
      index: 'war-priest',
      name: 'War Priest',
      desc: [
        'Your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.',
        'You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
      ],
      range: "Weapon's Range",
      duration: 'Instantaneous',
      casting_time: '1 bonus action',
      level: 1,
    },
    {
      index: 'guided-strike',
      name: 'Guided Strike',
      desc: [
        'You use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
      ],
      range: "Weapon's Range",
      duration: 'Instantaneous',
      level: 2,
    },
    {
      index: 'war-gods-blessing',
      name: "War God's Blessing",
      desc: [
        'When a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
      ],
      range: '30 feet',
      duration: 'Instantaneous',
      casting_time: '1 reaction',
      level: 6,
    },
    {
      index: 'divine-strike',
      name: 'Divine Strike',
      desc: [
        'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target.',
      ],
      higher_level: [
        'When you reach 14th level, the extra damage increases to 2d8.',
      ],
      range: "Weapon's Range",
      duration: 'Instantaneous',
      level: 6,
    },
  ],
];
