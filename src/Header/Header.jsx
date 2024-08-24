import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../Theme/ThemeToggleButton';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.appBar.main,
}));

const HeroBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    color: theme.palette.text.primary,
    textAlign: 'center',
    padding: theme.spacing(2),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.text.primary,
}));

function Header({ toggleTheme, themeMode }) {
    return (
        <div>
            <StyledAppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        My Portfolio
                    </Typography>
                    <Button color='inherit' component={Link} to="/">Home</Button>
                    <Button color='inherit' component={Link} to="/about">About</Button>
                    <Button color='inherit' component={Link} to="/projects">Projects</Button>
                    <Button color='inherit' component={Link} to="/skills">Skills</Button>
                    <Button color='inherit' component={Link} to="/contact">Contact</Button>
                    <ThemeToggleButton onClick={toggleTheme} currentTheme={themeMode} />
                </Toolbar>
            </StyledAppBar>
            <HeroBox>
                <Typography variant='h2' sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>Durga Prasad</Typography>
                <Typography variant='h5' sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>Software Developer</Typography>
                <Typography variant='body1' paragraph>
                    A brief introduction about who you are and what you do.
                </Typography>
                <ButtonContainer>
                    <Button variant='contained' color='secondary' component={Link} to='/projects'>
                        View My Work
                    </Button>
                    <Button variant='outlined' color='secondary' component={Link} to='/contact'>
                        Contact Me
                    </Button>
                </ButtonContainer>
                <SocialIcons>
                <a href="https://github.com/Durga1534" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon fontSize='large' />
                </a>
                <a href="https://www.linkedin.com/in/durga-prasad-b5095422a" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon fontSize='large' />
                </a>
                 <a href="https://leetcode.com/u/durga_18_04/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode fontSize='large' />
                 </a>
                </SocialIcons>
            </HeroBox>
        </div>
    );
}

export default Header;
