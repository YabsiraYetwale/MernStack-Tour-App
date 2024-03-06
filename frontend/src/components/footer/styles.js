import { styled } from '@mui/material/styles';
import {CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const FooterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingBottom: '30px',
});

export const LogoBox = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
});
export const FooterBox = styled('div')({
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '40px',
});

export const LogoImage = styled(CardMedia)({
  width: '60px',
  height: '40px',
});

export const FooterTitle = styled(Typography)({
  fontSize: '30px',
  fontWeight: 'bolder',
  color:'#898191'
});

export const LinkContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  '@media(max-width:620px)': {
    gap: '20px',
    flexWrap: 'wrap',
  },
});

export const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: '#444',
});

export const SocialMediaContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
});