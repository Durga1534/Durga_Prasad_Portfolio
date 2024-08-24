import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme, pastelTheme, lavenderTheme } from './Theme/Theme'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

function App() {
    const [themeMode, setThemeMode] = useState('light'); 

    const handleThemeChange = () => {
        setThemeMode((prevMode) => {
            switch (prevMode) {
                case 'light':
                    return 'dark';
                case 'dark':
                    return 'pastel';
                case 'pastel':
                    return 'lavender';
                case 'lavender':
                    return 'light'; 
                default:
                    return 'light';
            }
        });
    };

    const getTheme = () => {
        switch (themeMode) {
            case 'dark':
                return darkTheme;
            case 'pastel':
                return pastelTheme;
            case 'lavender':
                return lavenderTheme;
            default:
                return lightTheme;
        }
    };

    return (
        <ThemeProvider theme={getTheme()}>
            <CssBaseline />
            <Router>
                <Header toggleTheme={handleThemeChange} themeMode={themeMode} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
