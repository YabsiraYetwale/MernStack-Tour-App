import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress} from '@mui/material'
import { WomenContainer,Heading, ProductContainer} from './styles';
import { fetchProducts } from '../../../actions/product'
import { useEffect } from 'react'
import Category from '../../catagories/category/Category'

const Women = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const womenProducts=products?.filter((product) => product.category === 'women')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products) {
    return null;
  }

  if (isLoading) {
    return <WomenContainer>{<CircularProgress/>}</WomenContainer>
  }

  return (
    <>
     {!womenProducts?.length ? '' :
     <WomenContainer>
        <Heading>POPULAR IN WOMEN<hr/></Heading>
        <ProductContainer>
          {womenProducts.slice(0,4).map((post, i) => (
            <Box key={i}>
              <Category post={post} />
            </Box>
          ))}
        </ProductContainer>
      </WomenContainer>}
    </>
  );
};

export default Women;
