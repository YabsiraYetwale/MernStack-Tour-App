import Category from "./category/Category";
import m77 from "../../assets/m77.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/product";
import { useState, useEffect } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import {
  LoadingContainer,
  Container,
  GradientBox,
  InnerBox,
  CategoryBox,
  DiscountBox,
  DiscountText,
  TimerBox,
  ExploreButton,
  ProductsBox,
  ShowingText,
  SortByBox,
  ProductContainer,
  ExploreMoreButton,
  StyledCardMedia,
} from "./styles";

const MenCategories = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const menProduct = products?.filter((product) => product.category === "men");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const menProduct = products?.filter(
        (product) => product.category === "men"
      );

      if (showAll) {
        const sortedProducts = menProduct.sort((a, b) => {
          if (sortOption === "title") {
            return sortOrder === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          } else if (sortOption === "newPrice") {
            return sortOrder === "asc"
              ? a.newPrice - b.newPrice
              : b.newPrice - a.newPrice;
          } else if (sortOption === "date") {
            return sortOrder === "asc"
              ? new Date(b.date) - new Date(a.date)
              : new Date(a.date) - new Date(b.date);
          }
        });
        setDisplayedProducts(sortedProducts);
      } else {
        const getLatestProductsByCategory = (category, count) => {
          const filteredProducts = products?.filter(
            (product) => product.category === category
          );
          return filteredProducts.slice(0).slice(count);
        };
        const latestProducts = getLatestProductsByCategory("men", -5);
        const sortedProducts = latestProducts.sort((a, b) => {
          if (sortOption === "title") {
            return sortOrder === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          } else if (sortOption === "newPrice") {
            return sortOrder === "asc"
              ? a.newPrice - b.newPrice
              : b.newPrice - a.newPrice;
          } else if (sortOption === "date") {
            return sortOrder === "asc"
              ? new Date(b.date) - new Date(a.date)
              : new Date(a.date) - new Date(b.date);
               
          }
        });

        setDisplayedProducts(sortedProducts);
      }
    }
  }, [products, showAll, sortOption, sortOrder]);
  const handleExploreMoreClick = () => {
    setShowAll(true);
  };

  if (isLoading || !products) {
    return <LoadingContainer>{<CircularProgress />}</LoadingContainer>;
  }

  return (
    <>
      <Container>
        {!menProduct?.length ? (
          <Container>
            <DiscountBox>
              <DiscountText>no products for now</DiscountText>
            </DiscountBox>
          </Container>
        ) : (
          <>
            <GradientBox>
              <InnerBox>
                <CategoryBox>
                  <DiscountBox>
                    <DiscountText>FLAT 50% OFF</DiscountText>
                  </DiscountBox>
                  <TimerBox>
                    <Typography
                      sx={{
                        color: "#c037c0",
                        fontSize: "30px",
                        fontWeight: "bolder",
                      }}
                    >
                      12
                    </Typography>{" "}
                    Hours{" "}
                    <Typography
                      sx={{
                        color: "#c037c0",
                        fontSize: "30px",
                        fontWeight: "bolder",
                      }}
                    >
                      20
                    </Typography>{" "}
                    Mins
                  </TimerBox>
                  <ExploreButton>
                    <Typography onClick={handleExploreMoreClick}>
                      Explore more
                    </Typography>
                  </ExploreButton>
                </CategoryBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledCardMedia src={m77} alt="category" />
                </Box>
              </InnerBox>
            </GradientBox>
            {menProduct && (
              <ProductsBox>
                <ShowingText sx={{ color: "#565656" }}>
                  Showing 1-{displayedProducts.length} out of{" "}
                  {menProduct?.length} Products
                </ShowingText>
                <SortByBox>
                  <Typography>Sort by&nbsp;&nbsp;</Typography>
                  <select
                    style={{ width: "20px" }}
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="title">Title</option>
                    <option value="newPrice">New Price</option>
                    <option value="date">Date</option>
                  </select>
                </SortByBox>
              </ProductsBox>
            )}
            <ProductContainer>
              {displayedProducts.map((product, i) => (
                <ProductContainer key={i}>
                  <Category post={product} />
                </ProductContainer>
              ))}
            </ProductContainer>
            {menProduct?.length > displayedProducts.length && (
              <ExploreMoreButton>
                <Typography onClick={handleExploreMoreClick}>
                  Explore more
                </Typography>
              </ExploreMoreButton>
            )}
            {showAll && (
              <ExploreMoreButton>
                <Typography
                  onClick={() => {
                    setShowAll(false);
                  }}
                >
                  Show less
                </Typography>
              </ExploreMoreButton>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default MenCategories;
