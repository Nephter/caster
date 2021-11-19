import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
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

  const handleDropdownClick = (key) => {
    console.log(key);
    props.onDropdownClick(key);
  };

  return (
    <div key={props.index}>
      <Button
        size="small"
        variant="outlined"
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
              minWidth: '100px',
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
          {props.spell.ritual === true && (
            <MenuItem
              className="d-flex justify-content-center"
              onClick={() => alert('Spell cast as ritual')}
              style={{
                fontFamily: 'Patrick Hand sc, cursive',
                fontSize: '1.2rem',
              }}
            >
              Ritual
            </MenuItem>
          )}

          {props.spellSlots.map((s, key) => {
            return s === 0 ? (
              ''
            ) : (
              <MenuItem
                className="d-flex justify-content-center "
                key={key}
                onClick={() => handleDropdownClick(key)}
                sx={{
                  fontFamily: 'Patrick Hand sc, cursive',
                  fontSize: '1.2rem',
                }}
              >
                {key + 1}
              </MenuItem>
            );
          })}
        </Menu>
      </Button>
    </div>
  );
}
