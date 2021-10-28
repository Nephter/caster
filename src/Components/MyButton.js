import * as React from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Col, Media } from 'reactstrap';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

  return (
    <div key={props.index}>
      <Button
        small
        aria-describedby={id}
        onClick={handleClick}
        key={props.index}
        variant="contained"
      >
        Cast
      </Button>
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
