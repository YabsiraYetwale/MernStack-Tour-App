import { styled } from '@mui/material/styles';
import { Box,Typography,CardMedia } from '@mui/material';

export const OfferContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '30px',
});

export const BackgroundBox = styled(Box)({
  background: 'linear-gradient(180deg, #f1edf1, #e4e0e0, #c7c4c4 60%)',
});

export const ContentBox = styled(Box)({
  padding: '80px 80px 0px 80px',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '100px',
  '@media (max-width:820px)': {
    gap: '10px',
  },
  '@media (max-width:620px)': {
    flexWrap: 'wrap',
  },
});

export const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 0',
  gap: '30px',
});

export const ExclusiveTypography = styled(Typography)({
  fontSize: '60px',
  fontWeight: 'bolder',
  '@media (max-width:820px)': {
    fontSize: '30px',
  },
  '@media (max-width:400px)': {
    width: '70%',
    ml: '40px',
  },
});

export const OffersTypography = styled(Typography)({
  fontSize: '60px',
  fontWeight: 'bolder',
  '@media (max-width:820px)': {
    fontSize: '30px',
  },
  '@media (max-width:400px)': {
    width: '70%',
    ml: '40px',
  },
});

export const DescriptionTypography = styled(Typography)({
  color: '#565656',
  fontWeight: 'bolder',
  '@media(max-width:400px)': {
    width: '70%',
    ml: '40px',
  },
});

export const CheckButton = styled(Box)({
  background: 'linear-gradient(180deg, #8d828d, #8b8888, #ac8989 60%)',
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 10px',
  borderRadius: '20px',
  color: '#fff',
  cursor: 'pointer',
  '@media (max-width:400px)': {
    width: '70%',
    ml: '40px',
  },
});

export const OfferImage = styled(CardMedia)({
  width: '380px',
  height: '440px',
});