import * as React from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Col, Media } from 'reactstrap';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Abjuration from '../assets/img/theme/Abjuration.jpg';
import Conjuration from '../assets/img/theme/Conjuration.jpg';
import Divination from '../assets/img/theme/Divination.jpg';
import Enchantment from '../assets/img/theme/Enchantment.jpg';
import Evocation from '../assets/img/theme/Evocation.jpg';
import Illusion from '../assets/img/theme/Illusion.jpg';
import Necromancy from '../assets/img/theme/Necromancy.jpg';
import Transmutation from '../assets/img/theme/Transmutation.jpg';

// add back button in case of accident

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          marginTop: '-10px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: '-10px',
          marginTop: '-10px',
        },
      },
    },
  },
});

// let i;
// let sum = 0;
// for (i = 0; i < props.spellSlots.length; i++) {
//   sum += props.spellSlots[i];
// }
const MyButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // sends popover button's key position to App
  const handlePopoverClick = (spellLevel) => {
    props.onPopoverHandler(spellLevel);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
    <div key={props.index}>
      <button
        aria-describedby={id}
        onClick={handleClick}
        key={props.index}
        style={{
          position: 'relative',
          padding: 0,
          top: '6px',
          border: 0,
        }}
      >
        <img className="avatar rounded-circle" alt="..." src={school} />
      </button>
      <ThemeProvider theme={theme}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          key={props.index}
        >
          <Typography key={props.index} sx={{ p: 2 }}>
            {props.spell.name}
          </Typography>

          {/* s is the number of spell slots of particular spell level */}
          {/* key is the array position of each spell slot number */}
          {props.spellSlots.map((s, key) => {
            return s === 0 ? (
              ''
            ) : (
              <Col key={key}>
                <Button
                  size="small"
                  onClick={() => handlePopoverClick(key)}
                  key={key}
                >
                  {key + 1}
                </Button>
              </Col>
            );
          })}
        </Popover>
      </ThemeProvider>
    </div>
  );
};

export default MyButton;
