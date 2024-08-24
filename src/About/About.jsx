import React from 'react';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    color: theme.palette.text.primary,
    textAlign: 'center',
    padding: theme.spacing(2),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
}));

const CardsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    justifyContent: 'center',
}));

const BioCard = styled(Card)(({ theme }) => ({
    flex: '1 1 45%',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform:'scale(1.05)',
    }
}));

const EducationCard = styled(Card)(({ theme }) => ({
    flex: '1 1 45%',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform:'scale(1.05)',
    }
}));

function About() {
    return (
        <HeroBox>
            <StyledContainer maxWidth='md'>
                <Typography variant='h4' component='h1' gutterBottom>
                    About Me
                </Typography>
                <CardsContainer>
                    <BioCard>
                        <CardContent>
                            <Typography variant='h5' component='h2' gutterBottom>
                                Bio
                            </Typography>
                            <Typography variant='body1' paragraph>
                                Hi, I'm Durga Prasad, a passionate Software Developer with experience
                                in web development. I love creating user-friendly, responsive, and
                                visually appealing applications. I have a keen interest in learning new
                                technologies and improving my skills continuously.
                            </Typography>
                        </CardContent>
                    </BioCard>
                    <EducationCard>
                        <CardContent>
                            <Typography variant='h5' component='h2' gutterBottom>
                                Education
                            </Typography>
                            <Typography variant='h6' component='h3'>
                                Bachelor of Physics 'BSC(Physics)'
                            </Typography>
                            <Typography variant="body2" color='textSecondary'>
                                Viswam Degree and PG College, Madanapalli<br />
                                <strong>2020-2023</strong>
                            </Typography>
                            <Typography variant='body2' component='h4'>
                                CGPA: 6.03  
                            </Typography>
                            <Typography variant='h6' component='h3'>
                                Secondary School Education 
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                Mother Theresa Junior College, Palamaner <br /> 
                                <strong>2016-2018</strong> 
                            </Typography>
                            <Typography variant='body2' component='h4'>
                                Marks: 560/1000
                            </Typography>
                            <Typography variant='h6' component='h3'>
                                SSC
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                ViswhaBharathi High School, Punganur <br /> 
                                <strong>2015-2016</strong>
                            </Typography>
                            <Typography variant='body2' component='h4'>
                                Grade: 6.2/10
                            </Typography>
                        </CardContent>
                    </EducationCard>
                </CardsContainer>
            </StyledContainer>
        </HeroBox>
    );
}

export default About;
