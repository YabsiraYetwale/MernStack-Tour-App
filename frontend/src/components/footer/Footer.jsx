import {
  FacebookOutlined,
  Instagram,
  CallOutlined,
} from '@mui/icons-material';
import { Box} from '@mui/material';
import {
  FooterContainer,
  LogoBox,
  FooterBox,
  LogoImage,
  FooterTitle,
  LinkContainer,
  FooterLink,
  SocialMediaContainer,
} from './styles';
import logo from '../../assets/logo.jpg';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <FooterContainer>
        <Box>
          <LogoBox>
            <LogoImage image={logo} alt="logo" />
            <FooterTitle>CLOTH-SHOP</FooterTitle>
          </LogoBox>
        </Box>
        <FooterBox>
          <LinkContainer>
            <FooterLink onClick={handleClick} to="/">
              Home
            </FooterLink>
            <FooterLink to="/catagory/men">Men's</FooterLink>
            <FooterLink to="/catagory/women">Women's</FooterLink>
            <FooterLink to="/catagory/kids">Kid's</FooterLink>
          </LinkContainer>
          <SocialMediaContainer>
            <FacebookOutlined />
            <CallOutlined />
            <Instagram />
          </SocialMediaContainer>
        </FooterBox>
      </FooterContainer>
    </>
  );
};

export default Footer;