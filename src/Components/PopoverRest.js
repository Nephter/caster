import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;

export default function PopoverRest(props) {
  const [anchorEl, setAnchorEl] = useState(props.dropdownIsOpen);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const handleShortRestClick = () => {};
  const handleLongRestClick = () => {
    props.onLongRestClick();
    props.setnewSpellPrepped({ spell: [] });
  };

  return (
    <div>
      <IconButton
        className="castButton font-weight-bolder"
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          fontSize: '1rem',
          position: 'relative',
          top: '10px',
          border: '1px solid grey',
        }}
      >
        Rest
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
          <MenuItem
            className="d-flex justify-content-center"
            style={{ fontFamily: 'Patrick Hand sc, cursive' }}
            onClick={handleShortRestClick}
          >
            Short
          </MenuItem>
          <MenuItem
            className="d-flex justify-content-center"
            style={{ fontFamily: 'Patrick Hand sc, cursive' }}
            onClick={handleLongRestClick}
          >
            Long
          </MenuItem>
        </Menu>
      </IconButton>
    </div>
  );
}
