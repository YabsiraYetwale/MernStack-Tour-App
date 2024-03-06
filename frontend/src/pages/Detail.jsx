import { useEffect,useState} from "react";
import { useLocation,useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProduct, addToCart } from "../actions/product";
import { img_url } from "../api";
import { Box, CircularProgress, Typography } from "@mui/material";
import {
  Container,
  CardBox,
  ImageContainer,
  ImageWrapper,
  Image,
  MainImage,
  TextWrapper,
  SizeContainer,
  SizeBox,
  ActionButton,
  InfoBox,
  ActionButtonsWrapper,
  StyledButton,
  StyledButton1,
  StyledLink,
} from "./styles/Detail.styles";
const Detail = () => {
  const { product, isLoading } = useSelector((state) => state.products);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-auth"))
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user-auth")));
  }, [location]);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (isLoading || !product) {
    return <Container>{<CircularProgress />}</Container>;
  }
  return (
    <>
      <Container>
        <CardBox>
          <ImageContainer>
            <ImageWrapper>
              <Image image={`${img_url}${product?.image}`} alt="img" />
              <Image image={`${img_url}${product?.image}`} alt="img" />
              <Image image={`${img_url}${product?.image}`} alt="img" />
              <Image image={`${img_url}${product?.image}`} alt="img" />
            </ImageWrapper>
            <Box>
              <MainImage
                image={
                  `${img_url}${product?.image}` ||
                  "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                alt="img"
              />
            </Box>
          </ImageContainer>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <Typography
              sx={{
                color: "rgba(75, 68, 68, 0.9)",
                fontSize: "40px",
                fontWeight: "bolder",
              }}
            >
              {product?.title}
            </Typography>
            <TextWrapper>
              <Typography>${product?.newPrice}</Typography>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "rgba(173, 170, 170, 0.9)",
                }}
              >
                ${product?.oldPrice}
              </Typography>
            </TextWrapper>
            <SizeContainer>
              <SizeBox>XS</SizeBox>
              <SizeBox>S</SizeBox>
              <SizeBox>M</SizeBox>
              <SizeBox>L</SizeBox>
              <SizeBox>XL</SizeBox>
            </SizeContainer>
            {user?.result && (
              <ActionButton sx={{ width: "200px" }}>
                <StyledButton
                  onClick={()=> dispatch(addToCart(product._id, 1, history))}
                >
                  ADDTOCART
                </StyledButton>
              </ActionButton>
            )}
          </Box>
        </CardBox>
        {user?.result?.role ==='admin' || user?.result?._id  === product?.creator
        ? 
        (<ActionButtonsWrapper>
          <StyledLink to={`/editProduct/${product?._id}`}>
            <StyledButton>EDIT</StyledButton>
          </StyledLink>
            <StyledButton1
              onClick={() => dispatch(deleteProduct(product?._id, history))}
            >
              DELETE
            </StyledButton1>
        </ActionButtonsWrapper>):('' )
        }
        <InfoBox>
          <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
            PRODUCT DETAILS
          </Typography>
          <Typography>{product?.description}</Typography>
        </InfoBox>
      </Container>
    </>
  );
};

export default Detail;
