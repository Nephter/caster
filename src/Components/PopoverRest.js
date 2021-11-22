import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
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

  // sets short rest state and effects on dropdown click
  const handleShortRestClick = () => {
    props.onShortRestClick();
  };

  // sets long rest state and effects on dropdown click
  const handleLongRestClick = () => {
    props.onLongRestClick();
    props.setNewSpellPrepped({ spell: [...props.domain] });
  };

  return (
    <div style={{ marginTop: '-30px' }}>
      <Button
        size="small"
        variant="contained"
        color="success"
        className="castButton mr-3"
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
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
            <h3>Short</h3>
          </MenuItem>
          <MenuItem
            className="d-flex justify-content-center"
            style={{ fontFamily: 'Patrick Hand sc, cursive' }}
            onClick={handleLongRestClick}
          >
            <h3>Long</h3>
          </MenuItem>
        </Menu>
      </Button>
    </div>
  );
}
