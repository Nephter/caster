import MyModal from '../Components/MyModal';

// Attack roll, saving throw, Dice roll all different colors

export const spellsListData = [
  {
    level: '1',
    spellName: 'Bane',
    components: 'V S M',
    castingTime: 'Action',
    range: '30',
    duration: '1 minute Concentration',
    attackSave: false,
    special: ['ritual', 'domain', 'cantrip'],
    modal: (
      <MyModal
        data={{
          spellName: 'Bane',
          description: (
            <p>
              Up to three creatures of your choice that you can see within range
              must make Charisma saving throws. Whenever a target that fails
              this saving throw makes an <mark> attack roll</mark> or a saving
              throw before the spell ends, the target must roll a d4 and
              subtract the number rolled from the attack roll or saving throw.
              <br /> <b> HigherLevel: </b> <br />
              When you cast this spell using a spell slot of 2nd level or
              higher, you can target one additional creature for each slot level
              above 1st.
            </p>
          ),
          castingTime: 'Action',
          range: "30'",
          duration: '1 minute Concentration',
        }}
      />
    ),
  },
  {
    level: '1',
    spellName: 'Bless',
    components: 'V S M',
    castingTime: 'Action',
    range: '30',
    duration: '1 minute Concentration',
    attackSave: false,
    special: ['ritual', 'domain', 'cantrip'],
    modal: (
      <MyModal
        data={{
          spellName: 'Bless',
          description: (
            <p>
              You bless up to three creatures of your choice within range.
              Whenever a target makes an attack roll or a saving throw before
              the spell ends, the target can roll a D4 and add the number rolled
              to the attack roll or saving throw. <br /> <b> HigherLevel: </b>{' '}
              <br />
              When you cast this spell using a spell slot of 2nd level or
              higher, you can target one additional creature for each slot level
              above 1st.
            </p>
          ),
          castingTime: 'Action',
          range: "30'",
          duration: '1 minute Concentration',
        }}
      />
    ),
  },

  {
    spellName: 'Test 2',
    castingTime: 'Action',
    range: '30',
    duration: '1 minute Concentration',
    attackSave: false,
    special: ['ritual', 'domain', 'cantrip'],
    modal: (
      <MyModal
        data={{
          spellName: 'Test 2',
          description: 'Test 2 description',
        }}
      />
    ),
  },
];
