import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;

export default function PopoverCDCaster(props) {
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

  // sets button state based on Channel Divinity casts
  useEffect(() => {
    if (props.cDCasts === 0) {
      setButton(true);
      setAnchorEl(false);
    } else if (props.cDCasts === props.ChannelDivinityCasts) {
      setButton(false);
    }
  }, [props.cDCasts]);

  // sets Channel Divinity casts basted on clicked dropdown
  const handleChannelDivinityClick = () => {
    props.useChannelDivinity();
  };

  return (
    <div key={props.index}>
      <Button
        size="small"
        variant="outlined"
        disabled={button}
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
            onClick={handleChannelDivinityClick}
            sx={{ fontFamily: 'Patrick Hand sc, cursive' }}
          >
            <h3>Channel Divinity</h3>
          </MenuItem>
        </Menu>
      </Button>
    </div>
  );
}
