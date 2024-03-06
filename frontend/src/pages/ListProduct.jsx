import { useDispatch, useSelector } from 'react-redux';
import { Box, CardMedia, CircularProgress, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Delete } from '@mui/icons-material';
import { fetchProducts, deleteProducts } from '../actions/product';
import { img_url } from '../api';
import {
  LoadingContainer,
  Container,
  Header,
  ProductContainer,
  ProductItem,
  TotalsContainer,
  TotalsHeader,
  TotalsItem,
} from './styles/ListProduct.styles';

const ListProduct = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const user = JSON.parse(localStorage.getItem("user-auth"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (isLoading) {
    return <LoadingContainer>{<CircularProgress/>}</LoadingContainer>
  }
const categoryCounts = products?.reduce((counts, product) => {
  counts[product.category] = (counts[product.category] || 0) + 1;
  return counts;
}, {});

  return (
    <>
      <Container>
        {!products?.length ? 
      <Container>no products</Container>

        :<>
        <Header>
        <Box sx={{  display:'flex',
    justifyContent:' space-around',
    gap:'65px',}}>
            <Typography>Products</Typography>
            <Typography sx={{ width: '230px', display: { xs: 'none', sm: 'none', md: 'block' } }}>
              Title
            </Typography>
          </Box>
          <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>Old Price</Typography>
          <Typography>New Price</Typography>
          <Typography>Category</Typography>
          <Typography>Remove</Typography>
        </Header>
        <ProductContainer>
          {products.map((product, i) => (
            <Box key={i}>
              <Divider
                sx={{
                  width: '90%',
                  position: 'relative',
                  '@media(max-width:800px)': {
                    left: '-40px',
                    width: '100%',
                  },
                }}
              />
              <ProductItem>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
                  <CardMedia
                    image={`${img_url}${product.image}`}
                    alt="img"
                    sx={{
                      position: 'relative',
                      left: '-20px',
                      width: '40px',
                      height: '40px',
                    }}
                  />
                  <Typography sx={{ width: '230px', display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    {product.title}
                  </Typography>
                </Box>
                <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                  ${product.oldPrice}
                </Typography>
                <Typography>${product.newPrice}</Typography>
                <Typography>{product.category}</Typography>
                {user?.result &&
                <Typography
                  sx={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => dispatch(deleteProducts(product._id))}
                ><Delete />
                </Typography>}
              </ProductItem>
            </Box>
          ))}
            <Divider
                sx={{
                  width: '90%',
                  position: 'relative',
                  '@media(max-width:800px)': {
                    left: '-40px',
                    width: '100%',
                  },
                }}
              />
        </ProductContainer>
      <TotalsContainer>
        <Box>
          <TotalsHeader>Totals</TotalsHeader>
          <Box>
          <Box>
            {Object.entries(categoryCounts).map(([category, count]) => (
              <Box key={category}>
                <TotalsItem>
                  <Typography>{category}</Typography>
                  <Typography>{count}</Typography>
                </TotalsItem>
                <Divider />
              </Box>
            ))}
          </Box>
            <Box>
              <TotalsItem>
                <Typography>Total</Typography>
                <Typography>
                  {products.length}
                </Typography>
              </TotalsItem>
              <Divider />
            </Box>
          </Box>
        </Box>
      </TotalsContainer></>}
      </Container>
    </>
  )
  }
  export default ListProduct