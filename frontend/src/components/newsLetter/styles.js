import { styled } from '@mui/material/styles';
import { Box,Typography,TextField } from '@mui/material';

export const NewsletterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  paddingBottom: '30px',
});

export const BackgroundBox = styled(Box)({
  background: 'linear-gradient(#f1eff1, #f7f3f3, #fff4f4)',
  padding: '0px 80px 5px 80px',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '100px',
});

export const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 180px',
  gap: '10px',
});

export const ExclusiveTypography = styled(Typography)({
  fontSize: '40px',
  fontWeight: 'bolder',
  '@media(max-width:620px)': {
    fontSize: '20px',
    width: '70%',
    ml: '30px',
  },
});

export const DescriptionTypography = styled(Typography)({
  color: '#565656',
  '@media(max-width:400px)': {
    width: '70%',
    ml: '30px',
  },
});

export const InputContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media(max-width:400px)': {
    flexWrap: 'wrap',
  },
});

export const EmailTextField = styled(TextField)({
  width: '300px',
  padding: '15px 40px',
  border: 'none',
  paddingLeft: '30px',
});

export const SubscribeButton = styled(Box)({
  background: 'linear-gradient(180deg, #8d828d, #8b8888, #ac8989 60%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '18px 40px',
  borderRadius: '2px',
  color: '#fff',
  cursor: 'pointer',
  position: 'relative',
  right: '40px',
});