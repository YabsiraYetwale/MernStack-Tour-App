import { Box,CircularProgress,Divider,Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {removeFromCart } from '../actions/product';
import { img_url } from '../api';
import {
  LoadingContainer,
  Container,
  SectionContainer,
  HeaderContainer,
  ProductBox,
  ProductContainer,
  StyledCardMedia,
  StyledDivider,
  Title,
  QuantityContainer,
  StyledTextField,
  SubmitButton,
  SubtotalContainer,
  TotalContainer,
  PromoBox,
  PromoCodeContainer,
  StyledBox,
  PromoCodeText,
  CartTotalsContainer,
  CartContainer,
} from './styles/Cart.styles';
const Cart = () => {
  const {isLoading} = useSelector((state) => state.products);
  
const dispatch = useDispatch();
const history = useNavigate();




if (isLoading) {
  return <LoadingContainer>{<CircularProgress/>}</LoadingContainer>
}
const user = JSON.parse(localStorage.getItem('user-auth'));
const totalPrice = user?.result?.cart.reduce((total, product) => {
  const productPrice = product.quantity * product.productId.newPrice;
  return total + productPrice;
}, 0);
  return (
    <>
      <Container>
       {!user?.result?.cart.length ? 
       <Container>no products added to cart </Container>
       :<>
        <SectionContainer>
          <HeaderContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '65px' }}>
              <Typography>Product</Typography>
              <Title sx={{display: { xs: 'none', md: 'block' } }}>Title</Title>
            </Box>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Price</Typography>
            <Typography>Quantity</Typography>
            <Typography>Total</Typography>
            <Typography>Remove</Typography>
          </HeaderContainer>
          <ProductBox>
            {user?.result?.cart?.map((product, i) => (
             
              <Box sx={{ flexDirection: 'column', justifyContent: 'space-around', gap: '5px' }} key={i}>
                <StyledDivider/>
                <ProductContainer>
                  <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
                    <StyledCardMedia image={`${img_url}${product.productId.image}`} alt="img" />
                    <Title sx={{display: { xs: 'none', md: 'block' } }}>{product.productId.title}</Title>
                  </Box>
                  <Typography sx={{ display: { xs: 'none', md: 'block' } }}>${product.productId.newPrice}</Typography>
                  <QuantityContainer>{product.quantity}</QuantityContainer>
                  <Typography>${ product.quantity * product.productId.newPrice}</Typography>
                  <Typography sx={{cursor:'pointer',}} onClick={()=> dispatch(removeFromCart(product.productId._id,history))}>X</Typography>
                </ProductContainer>
              </Box>
            ))}
            <StyledDivider/>
          </ProductBox>
        </SectionContainer>
        <CartContainer>
          <CartTotalsContainer>
            <Typography sx={{ fontSize: '25px', fontWeight: 'bolder' }}>Cart Totals</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '5px', color: '#565656' }}>
              <Box>
                <SubtotalContainer>
                  <Typography>Subtotal</Typography>
                  <Typography>${totalPrice}</Typography>
                </SubtotalContainer>
                <Divider />
              </Box>
              <Box sx={{ fontWeight: 'bolder', fontSize: '20px' }}>
                <Box>
                  <SubtotalContainer>
                    <Typography>Shipping Fee</Typography>
                    <Typography>Free</Typography>
                  </SubtotalContainer>
                  <Divider />
                </Box>
                <TotalContainer>
                  <Typography>Total</Typography>
                  <Typography>${totalPrice}</Typography>
                </TotalContainer>
              </Box>
            </Box>
          </CartTotalsContainer>
          <PromoBox>
            <PromoCodeContainer>
              <PromoCodeText>if you have a promo code, Enter it here</PromoCodeText>
              <StyledBox>
                <StyledTextField type="text" placeholder="promo code" />
                <SubmitButton>
                  <Typography>Submit</Typography>
                </SubmitButton>
              </StyledBox>
            </PromoCodeContainer>
          </PromoBox>
        </CartContainer>
        </>}
      </Container>
    </>
  );
};

export default Cart;