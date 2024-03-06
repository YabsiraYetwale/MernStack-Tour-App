import { styled } from '@mui/material/styles';
import { Box, CardMedia, Divider, TextField, Typography } from '@mui/material'

export const LoadingContainer = styled(Box)({
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  padding:' 100px 0px 400px 0px',
});
export const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  padding: '120px 10px 140px 10px',
  gap: '50px',
});

export const SectionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  color: 'rgb(112, 108, 108)',
  fontWeight: 'bolder',
});

export const HeaderContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '10px',
  color: 'rgb(109, 99, 99)',
  fontWeight: 'bolder',
});
export const ProductBox = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 
    'space-around', 
    gap: '5px' 
});

export const ProductContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '10px',
  paddingTop: '10px',
});

export const StyledCardMedia = styled(CardMedia)({
  position: 'relative',
  left: '-10px',
  width: '40px',
  height: '40px',
});

export const Title = styled(Typography)({
  width: '230px',
});

export const QuantityContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'solid thin rgba(220, 220, 220, 0.8)',
  padding: '3px 15px',
  height: '30px',
});
export const StyledDivider = styled(Divider)({
        width: '90%',
        position: 'relative',
        left: '65px',
        '@media(max-width:800px)': {
          left: '0px',
          width: '100%',
        },
});

export const StyledTextField = styled(TextField)({
  width: '300px',
  padding: '17px 0px',
  border: 'none',
  paddingLeft: '30px', 
  '@media(max-width:800px)': {
    width: '220px',
    paddingLeft: '0px', 
  },
});

export const SubmitButton = styled(Box)({
  background: 'linear-gradient(180deg, #8d828d, #8b8888, #ac8989 60%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 40px',
  color: '#fff',
  cursor: 'pointer',
});

export const SubtotalContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  color: '#565656',
  fontWeight: 'bolder',
  fontSize: '14px',
});

export const TotalContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  color: '#565656',
  fontWeight: 'bolder',
  fontSize: '20px',
});

export const PromoBox = styled(Box)({
 display: 'flex', 
 justifyContent: 'space-around', 
 gap: '100px',
});
export const PromoCodeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 180px',
  gap: '10px',
  '@media(max-width:800px)': {
    padding: '35px 10px',

  },
});
export const StyledBox = styled(Box)({
  background: 'rgba(240, 240, 240, 0.8)',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  '@media(max-width:530px)': {
    flexDirection: 'column',
  },
});

export const PromoCodeText = styled(Box)({
  color: '#565656',
});

export const CartTotalsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: '10px',
  '@media(max-width:800px)': {
    width: '50%',
  },
 
});

export const CartContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 0.25fr',
  paddingLeft: '70px',
  '@media(max-width:800px)': {
    gridTemplateColumns: '0.25fr',
    paddingLeft: '0px',
  },
});