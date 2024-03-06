import { Box,Typography } from '@mui/material'
import {
  OfferContainer,
  BackgroundBox,
  ContentBox,
  TextContainer,
  ExclusiveTypography,
  OffersTypography,
  DescriptionTypography,
  CheckButton,
  OfferImage,
} from './styles';
import w2 from '../../assets/m11.png'
const Offer = () => {
  return (
    <>
      <OfferContainer>
        <BackgroundBox>
          <ContentBox>
            <TextContainer>
              <Box
                sx={{
                  color: '#c037c0',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '30px 0',
                }}
              >
                <ExclusiveTypography>
                  Exclusive
                </ExclusiveTypography>
                <OffersTypography>
                  Offers For You
                </OffersTypography>
              </Box>
              <DescriptionTypography>
                ONLY ON BEST SELLERS PRODUCTS
              </DescriptionTypography>
              <CheckButton>
                <Typography>Check now</Typography>
              </CheckButton>
            </TextContainer>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <OfferImage image={w2} alt='offer' />
            </Box>
          </ContentBox>
        </BackgroundBox>
      </OfferContainer>
    </>
  );
};

export default Offer;