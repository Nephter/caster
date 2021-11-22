import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;

export default function PopoverAbilityCaster(props) {
  const [anchorEl, setAnchorEl] = useState(props.dropdownIsOpen);
  const [button, setButton] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  // checks to set button state based on longRest property
  useEffect(() => {
    if (props.spell.longRest === true && props.longRested === false) {
      setButton(true);
    }
  }, []);

  // sets button state based on ability cast
  const handleAbilityClick = () => {
    setButton(true);
    props.setShortRested([...props.shortRested, props.index]);
  };

  return (
    <div key={props.index}>
      <Button
        size="small"
        variant="outlined"
        disabled={!(props.shortRested.indexOf(props.index) === -1)}
        className="castButton"
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Cast
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              paddingInline: '8px',
            },
          }}
        >
          <Typography
            variant="h6"
            className="d-flex justify-content-center"
            key={props.index}
          >
            {props.spell.name}
          </Typography>
          <MenuItem
            className="d-flex justify-content-center"
            onClick={handleAbilityClick}
            sx={{
              fontFamily: 'Patrick Hand sc, cursive',
            }}
          >
            <h3>Use</h3>
          </MenuItem>
        </Menu>
      </Button>
    </div>
  );
}
