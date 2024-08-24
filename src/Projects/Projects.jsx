import React from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
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

const ProjectsContainer = styled(Container)(({theme}) => ({
    marginTop:theme.spacing(8),
    marginBottom: theme.spacing(8),
}));

const ProjectCard = styled(Card)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform:'scale(1.05)',
    }
}));

const ProjectMedia = styled(CardMedia)(({
    height: 0,
    paddingTop: '56.25%',
}));

const ProjectContent = styled(CardContent)(({theme}) => ({
    flexGrow: 1,
}));
const ProjectGrid = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(4),
}))
function Projects() {
    return(
        <HeroBox>
        <ProjectsContainer maxwidth='lg'>
            <Typography variant='h4' component='h1' gutterBottom align='center'>
                My Projects
            </Typography>
            <ProjectGrid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                <a href="https://mortgage-repayment-bay.vercel.app/" target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}} >
                <ProjectCard>
                        <ProjectMedia 
                            image="https://mortgage-repayment-bay.vercel.app/assets/images/illustration-empty.svg"
                            title="Mortgage repayment calculator"
                        />
                        <ProjectContent>
                            <Typography variant='h5' component='h2' gutterBottom>
                                Mortgage Repayment Calculator
                            </Typography>
                            <Typography variant='body2'>
                                A web application to calculate mortgage repayments based on loan amount, interest rate, ande loan term
                                Built using HTML,CSS and Javascript.
                            </Typography>
                        </ProjectContent>
                   </ProjectCard>
                   </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href='' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                        <ProjectCard>
                            <ProjectMedia 
                                image="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                                title="Adivce Generator"
                            />
                            <ProjectContent>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Advice Generator
                                </Typography>
                                <Typography variant='body2'>
                                    A Web application that generates random adivce for users with just a click for a Button
                                    Built using HTML, CSS and JavaScript. 
                                </Typography>
                            </ProjectContent>
                        </ProjectCard>
                    </a>
                </Grid>
            </ProjectGrid>
        </ProjectsContainer>
        </HeroBox>
    )
}

export default Projects;