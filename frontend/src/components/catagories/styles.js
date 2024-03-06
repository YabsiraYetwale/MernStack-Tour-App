import { Box } from '@mui/system'
import { styled} from '@mui/material/styles';
import { Typography} from '@mui/material'

export const LoadingContainer = styled(Box)({
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  padding:' 100px 0px 400px 0px',
});
export const Container = styled(Box)({
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  flexDirection:' column',
  gap:' 20px',
  padding:' 80px 0px 100px 0px',
  "@media (max-width: 900px)": {
    padding:' 60px 0px 100px 0px',
  }

});
export const GradientBox = styled(Box)({
  background:'linear-gradient(#f1edf1, #fefefe, #ddd, #fff)',
  padding:' 0px 180px 0px 180px',

  });
export const InnerBox = styled(Box)({
  padding:' 0px 5px 0px 5px',
  display:' flex',
  justifyContent:' space-around',
  gap:' 100px',

  "@media (max-width:620px)":{
    gap:' 10px',
    flexWrap:' wrap',
    flexDirection:' column-reverse',
  }
 });

export const CategoryBox = styled(Box)({
  display:' flex',
  flexDirection:' column',
  padding:' 30px 0',
 });

export const DiscountBox = styled(Box)({
  color:' #c037c0',
  display:' flex',
  flexDirection:' column',
 });

export const DiscountText = styled(Box)({
  fontSize:' 60px',
  fontWeight:' bolder',
  "@media (max-width: 620px)": {
    fontSize:' 30px',
  }
});

export const TimerBox = styled(Box)({
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  gap:' 10px',
  fontSize:' 30px',
  fontWeight:' bolder',
  padding:' 15px 10px',

 });
export const ExploreButton = styled(Box)({
  background:' linear-gradient(180deg, #8d828d, #8b8888, #ac8989 60%)',
  width:' 200px',
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  padding:' 15px 10px',
  borderRadius:' 20px',
  color:' #fff',
  cursor:' pointer',
 });

export const ProductsBox = styled(Box)({
  display:' flex',
  justifyContent:' space-between',
  alignItems:' center',
  gap:' 20px',
  padding:' 5px 70px 5px 120px',
  gap:' 50rem',
  padding:' 5px 20px',
  "@media (max-width:900px)": {
    gap:' 28rem',
  },
  "@media (max-width: 620px)": {
    gap:' 5rem',
  }
 });

export const ShowingText = styled(Typography)({
  color:' #565656',
 });

export const SortByBox = styled(Box)({
  background:' #fff',
  width:' 150px',
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  padding:' 15px 10px',
  borderRadius:' 30px',
  border:' solid thin',
  cursor:' pointer',

 });
export const ProductContainer = styled(Box)({
  display:' flex',
  flexWrap:' wrap',
  justifyContent:' center',
  gridRowGap:' 40px',
  gridColumnGap:' 30px', 
 });

export const ExploreMoreButton = styled(Box)({
  background:' linear-gradient(180deg, #8d828d, #8b8888, #ac8989 60%)',
  width:' 200px',
  display:' flex',
  justifyContent:' center',
  alignItems:' center',
  padding:' 15px 10px',
  borderRadius:' 20px',
  color:' #fff',
  cursor:' pointer',
  marginTop:' 50px',
 });

export const StyledCardMedia = styled('img')({
  width:' 250px',
  height:' 250px',
});