import { styled } from '@mui/material/styles';
import { Typography} from '@mui/material';

export const HeroContainer = styled('div')({
  background: 'linear-gradient(180deg, #f1edf1, #e4e0e0, #c7c4c4 60%)',
  padding: '80px',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
  '@media (max-width:620px)': {
    flexDirection: 'column-reverse',
  },
});

export const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 0',
  color:' #c037c0',
  gap: '10px',
});
export const ImageBox = styled('div')({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
});

export const Title = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bolder',
});

export const Subtitle = styled(Typography)({
  fontSize: '60px',
  fontWeight: 'bolder',
  '@media (max-width:600px)': {
    fontSize: '30px',
  },
});

export const Button = styled('div')({
  background: 'linear-gradient(180deg, #8d828d, #8b8888, #ac8989 60%)',
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '20px',
  color: '#fff',
  cursor: 'pointer',
  '@media (max-width:600px)': {
    width: '140px',
  },
});
export const CustomLink = styled('a')({
  textDecoration: 'none',
  color:"#fff",
});
export const Image = styled('img')({
        width:'600px',
        height:'400px',
    "@media(max-width:900px)":{
            width:'200px',
            height:'200px',
    },
    "@media(max-width:'1200px)":{
            position:' relative',
            right:' 30px',
            width:'300px',
            height:'300px',
    }
});