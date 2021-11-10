import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Abjuration from '../assets/img/theme/Abjuration2.jpg';
import Conjuration from '../assets/img/theme/Conjuration2.jpg';
import Divination from '../assets/img/theme/Divination2.jpg';
import Enchantment from '../assets/img/theme/Enchantment2.jpg';
import Evocation from '../assets/img/theme/Evocation2.jpg';
import Illusion from '../assets/img/theme/Illusion2.jpg';
import Necromancy from '../assets/img/theme/Necromancy2.jpg';
import Transmutation from '../assets/img/theme/Transmutation2.jpg';
import { Badge } from 'reactstrap';

export default function DropdownSchoolIcon(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
  }

  return (
    <div className="">
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <img
          className="ml-3 rounded-circle avatar-sm"
          alt={'...'}
          src={school}
        />
        {props.spell.domain && (
          <Badge
            style={{
              fontSize: '.8rem',
              color: '#32325d',
              borderRadius: '90%',
              transform: 'translate(-5px, -10px)',
            }}
          >
            {props.domainIcon}
          </Badge>
        )}

        {/* // <img
          //   className="p-1"
          //   src={props.domainIcon}
          //   style={{
          //     fontSize: '.8rem',
          //     color: '#32325d',
          //     borderRadius: '90%',
          //     transform: 'translate(-8px, 8px)',
          //   }}
          // /> */}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography
          style={{
            fontFamily: 'Patrick Hand SC, cursive',
          }}
          sx={{ p: 1 }}
        >
          {props.spell.school.name}
        </Typography>
      </Popover>
    </div>
  );
}
