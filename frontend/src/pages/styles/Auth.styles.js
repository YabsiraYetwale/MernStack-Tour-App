import { styled } from '@mui/material/styles';
import {  Box,TextField,Button } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '130px 30px 90px 30px',
  margin: '0 0 180px 0',
  background: 'linear-gradient(#f5f1f5,#fcfcfc,#b1abab )',
});

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '30px',
  gap: '20px',
  background: '#fff',
});

export const Title = styled(Box)({
  fontWeight: 'bolder',
  fontSize: '30px',
});

export const AuthForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '400px',
  gap: '20px',
});

export const StyledTextField = styled(TextField)({
  width: '100%',
  '@media(max-width:400px)': {
    width: '63%',
  },
});

export const StyledButton = styled(Button)({
  width: '100%',
  '@media(max-width:400px)': {
    width: '63%',
  },
  height: '40px',
  background: 'red',
  '&:hover': {
    background: 'red',
  },
  border: 'none',
  fontWeight: 'bolder',
  cursor: 'pointer',
});

export const AuthLink = styled(Box)({
  display: 'flex',
  color: '#383636',
});

export const StyledLinkText = styled(Box)({
  color: 'rgb(190, 18, 18)',
  fontWeight: 'bolder',
  cursor: 'pointer',
});