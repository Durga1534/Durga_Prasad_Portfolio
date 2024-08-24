import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Components
const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 5),
  color: theme.palette.getContrastText(theme.palette.primary.main), // Dynamic text color based on primary color
  backgroundColor: theme.palette.primary.main, // Dynamic background color based on primary color
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // Darker shade on hover
  },
}));

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qqm1uec', 'template_xqob05k', form.current, 'O7ay2RKTcFxqt6wkO')
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Message sent successfully!');
        setErrorMessage('');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Failed to send the message. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <FormContainer maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        I'd love to hear from you! Please fill out the form below to get in touch.
      </Typography>
      <FormBox component="form" ref={form} onSubmit={sendEmail}>
        <StyledTextField
          required
          id="name"
          label="Your Name"
          name="user_name"
          variant="outlined"
        />
        <StyledTextField
          required
          id="email"
          label="Your Email"
          type="email"
          name="user_email"
          variant="outlined"
        />
        <StyledTextField
          required
          id="message"
          label="Your Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
        />
        <StyledButton variant="contained" color="primary" type="submit">
          Send Message
        </StyledButton>
      </FormBox>
      {successMessage && <Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
      {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}
    </FormContainer>
  );
};

export default Contact;
