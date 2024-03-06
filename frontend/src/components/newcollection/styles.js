import { styled } from '@mui/material/styles';
import { Card,CardMedia,Typography,Box } from '@mui/material';

export const StyledCard = styled(Card)({
  width: '270px',
});

export const StyledCardMedia = styled(CardMedia)({
  minHeight: '300px',
  transition: 'all 3s',
});

export const StyledTypography = styled(Typography)({
  color: 'rgba(75, 68, 68, 0.9)',
});

export const PriceContainer = styled(Box)({
  fontWeight: 'bolder',
  display: 'flex',
  gap: '18px',
});

export const StyledOldPriceTypography = styled(Typography)({
  textDecoration: 'line-through',
  color: 'rgba(131, 127, 127, 0.5)',
});



export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
});

export const Heading = styled(Box)({
  fontSize: '40px',
  fontWeight: 'bold',
  "@media (max-width:620px)": {
    flexDirection: 'column-reverse',
    fontSize: '30px',
  },
});

export const CollectionContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '40px',
});