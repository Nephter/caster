import * as React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;

export default function PopoverAbilityCaster(props) {
  const [anchorEl, setAnchorEl] = useState(props.dropdownIsOpen);
  const [button, setButton] = useState(props.shortRested);

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

  useEffect(() => {
    if (props.spell.longRest === true && props.longRested === false) {
      setButton(true);
    }
  }, []);

  const handleAbilityClick = () => {
    setButton(true);
  };

  return (
    <div key={props.index}>
      <IconButton
        disabled={button}
        className="castButton"
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ fontSize: '1rem', position: 'relative' }}
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
            className="d-flex justify-content-center"
            key={props.index}
            style={{
              fontFamily: 'Patrick Hand sc, cursive',
            }}
          >
            {props.spell.name}
          </Typography>

          <MenuItem
            className="d-flex justify-content-center"
            onClick={handleAbilityClick}
            style={{ fontFamily: 'Patrick Hand sc, cursive' }}
          >
            Use
          </MenuItem>
        </Menu>
      </IconButton>
    </div>
  );
}
