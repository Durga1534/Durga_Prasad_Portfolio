import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';

function ThemeToggleButton({ onClick, currentTheme }) {
    return (
        <IconButton onClick={onClick} color="inherit">
            {currentTheme === 'light' || currentTheme === 'pastel' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}

export default ThemeToggleButton;
