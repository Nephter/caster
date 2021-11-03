import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;

export default function PopoverCaster(props) {
  const [anchorEl, setAnchorEl] = useState(props.dropdownIsOpen);

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

  const handleDropdownClick = (spellLevel) => {
    props.onDropdownClick(spellLevel);
  };

  return (
    <div key={props.index}>
      <IconButton
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
          {props.spellSlots.map((s, key) => {
            return s === 0 ? (
              ''
            ) : (
              <MenuItem
                className="d-flex justify-content-center"
                key={key}
                onClick={() => handleDropdownClick(key)}
                style={{ fontFamily: 'Patrick Hand sc, cursive' }}
              >
                {key + 1}
              </MenuItem>
            );
          })}
        </Menu>
      </IconButton>
    </div>
  );
}
