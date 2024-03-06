import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography } from '@mui/material';

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '100px 40px 50px 40px',
  "@media (max-width:400px)": {
    padding: '100px 10px 20px 10px',
  },
});

export const FormWrapper = styled(Box)({
  background: 'linear-gradient(180deg,#f3f3f3,#f7f4f4,#fff)',
  padding: '30px 20px',
  margin: '0 120px',
  "@media (max-width:770px)": {
    margin: '0px',
  },
});

export const Form = styled('form')({
  position: 'relative',
  paddingBottom: '40px',
  left: '20px',
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
});

export const Title = styled(Typography)({
  paddingLeft: '20px',
});

export const InputField = styled(TextField)({
  width: '95%',
});

export const SelectWrapper = styled(Box)({
  display: 'flex',
  gap: '30px',
  marginRight: '48px',
  "@media(max-width:900px)": {
    marginRight: '30px',
  },
  "@media(max-width:650px)": {
    marginRight: '20px',
  },
  "@media(max-width:450px)": {
    flexDirection: 'column',
    marginRight: '15px',
  },
});

export const PriceInput = styled(TextField)({
  width: '100%',
});

export const CategorySelect = styled('select')({
  height: '30px',
  width: '150px',
});

export const UploadWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
});

export const UploadLabel = styled(Box)({
  color: '#3e8499',
  fontWeight: 'bold',
  cursor: 'pointer',
});

export const SubmitButton = styled(Button)({
  width: '150px',
  padding: '10px 20px',
  background: 'rgb(59, 59, 189)',
  color: '#fff',
  fontWeight: 'bold',
  borderStyle: 'hidden',
  borderRadius: '5px',
  cursor: 'pointer',
});