import React from 'react';
import { Container, Box,Typography, Card,Grid, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiExpress, SiMysql, SiGithub, SiTailwindcss } from 'react-icons/si';



const HeroBox = styled(Box)(({theme}) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundSize: 'cover',
    color: theme.palette.text.primary,
    textAlign: 'center',
    padding:theme.spacing(2),
    backgroundColor: theme.palette.background.default,
}));

const SkillsContainer = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
}));

const SkillsCard = styled(Card)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    color:theme.palette.text.primary,
    padding: theme.spacing(3),
    transition:'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform:'scale(1.05)',
        boxShadow: theme.shadows[4],
    },
    marginBottom: theme.spacing(4),
}));

const IconBox = styled(Box)({
    fontSize:'4.5rem',
    marginBottom: '1.4rem',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform:'scale(1.05)',
    }
});


function Skills() {
    return (
        <HeroBox>
            <SkillsContainer maxWidth='lg'>
                <Typography variant='h4' component='h2' gutterBottom align='center'>
                    My Skills
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SkillsCard>
                            <IconBox>
                                <Typography variant='h6' component='h2' gutterBottom>
                                    Frontend
                                </Typography>
                                <FaHtml5 color="#E34F26" />
                                <FaCss3Alt color="#1572B6" />
                                <FaJs color="#F7DF1E" />
                                <FaReact color="#61DAFB" />
                            </IconBox>
                            <CardContent>
                                <Typography variant='body2'>
                                 HTML, CSS, JavaScript, ReactJS
                                </Typography>
                            </CardContent>
                        </SkillsCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <SkillsCard>
                            <IconBox>
                             <Typography variant='h6' component='h2' gutterBottom>
                                Backend
                             </Typography>
                                <FaNodeJs color="#339933" />
                                <SiExpress color="#000000" />
                                <SiMongodb color="#47A248" />
                                <SiMysql color="#336791" />
                            </IconBox>
                            <CardContent>
                                <Typography variant='body2'>
                                    Node.js, Express, MongoDB, MySQL
                                </Typography>
                            </CardContent>
                        </SkillsCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                        <SkillsCard>
                            <IconBox>
                                <Typography variant='h6' component='h2' gutterBottom>
                                    Libraries & Tools
                                </Typography>
                            
                                <SiRedux color="#764ABC" />
                                <FaGitAlt color="#F05032" />
                                <SiGithub color="#000" />
                                <SiTailwindcss color="#1572B6" />
                            </IconBox>
                            <CardContent>
                                <Typography variant='body2'>
                                     Redux, Git, GitHub, TailwindCSS
                                </Typography>
                            </CardContent>
                        </SkillsCard>
                    </Grid>
                </Grid>
            </SkillsContainer>
        </HeroBox>
    )
}

export default Skills;
