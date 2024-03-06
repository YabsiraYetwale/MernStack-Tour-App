import { Box} from '@mui/material'
import {
   NewsletterContainer,
   BackgroundBox,
   ContentBox,
   ExclusiveTypography,
   DescriptionTypography,
   InputContainer,
   EmailTextField,
   SubscribeButton,
 } from './styles';
import React from 'react'
const NewsLetter = () => {
   return (
     <NewsletterContainer>
       <BackgroundBox>
         <ContentBox>
           <Box
             sx={{
               color: '#c037c0',
               display: 'flex',
               flexDirection: 'column',
               padding: '30px 0',
             }}
           >
             <ExclusiveTypography>
               Get Exclusive Offers On Your Email
             </ExclusiveTypography>
           </Box>
           <DescriptionTypography>
             Subscribe to our newsletter and stay updated.
           </DescriptionTypography>
           <InputContainer>
             <EmailTextField type="email" placeholder="Your Email" variant="outlined" />
             <SubscribeButton>
               <span>Subscribe</span>
             </SubscribeButton>
           </InputContainer>
         </ContentBox>
       </BackgroundBox>
     </NewsletterContainer>
   );
 };
 
 export default NewsLetter;