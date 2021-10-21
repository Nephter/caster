import * as React from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Col } from 'reactstrap';
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

  let i;
  let sum = 0;
  for (i = 0; i < props.spellSlots.length; i++) {
    sum += props.spellSlots[i];
  }

  return (
    <div>
      {!props.available && (
        <div key={props.available ? props.index : ''}>
          <Button
            size="small"
            color={sum >= 1 ? 'primary' : 'warning'}
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            key={props.index}
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
                {/* {props.spell.name} */}
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
      )}
    </div>
  );
};

export default MyButton;
