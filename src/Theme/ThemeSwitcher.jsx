import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

function ThemeSwitcher({ currentTheme, onChangeTheme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (theme) => {
    onChangeTheme(theme);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <ArrowDropDown />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => handleClose('lightTheme')}>Light Theme</MenuItem>
        <MenuItem onClick={() => handleClose('darkTheme')}>Dark Theme</MenuItem>
        <MenuItem onClick={() => handleClose('pastelTheme')}>Pastel Theme</MenuItem>
        <MenuItem onClick={() => handleClose('lavenderTheme')}>Lavender Theme</MenuItem>
      </Menu>
    </div>
  );
}

export default ThemeSwitcher;
