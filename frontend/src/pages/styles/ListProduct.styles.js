import { styled } from '@mui/material/styles';
import { Box} from '@mui/material';

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
  padding: '140px 10px 140px 10px',
  gap: '10px',
  "@media(max-width:900px)":{
    padding: '140px 2px 140px 5px',

  }
});

export const Header = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 10px 10px 10px',
  width: '90%',
  color: 'rgb(109, 99, 99)',
  fontWeight: 'bolder',
});

export const ProductContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 60px 70px 60px',
  justifyContent: 'space-around',
  gap: '5px',
  "@media(max-width:900px)":{
    padding: '0 1px 70px 70px',
  }
});

export const ProductItem = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '95%',
  gap: '10px',
  marginLeft: '-30px',
});

export const TotalsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  paddingLeft: '70px',
});

export const TotalsHeader = styled(Box)({
  fontSize: '25px',
  fontWeight: 'bolder',
});

export const TotalsItem = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  color: '#565656',
  fontWeight: 'bolder',
  fontSize: '14px',
});

export const TotalsTotal = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  color: '#565656',
  fontWeight: 'bolder',
  fontSize: '20px',
});