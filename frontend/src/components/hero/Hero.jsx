import React from "react";
import hero from "../../assets/w55.png";
import { Box,Typography} from "@mui/material";
import {
  HeroContainer,
  TextContainer,
  Title,
  Subtitle,
  CustomLink,
  Button,
  ImageBox,
  Image,
} from "./styles";

const Hero = () => {
  return (
    <>
      <Box>
        <HeroContainer>
          <TextContainer>
            <Title>NEW ARRIVALS ONLY</Title>
            <Box>
              <Subtitle>new</Subtitle>
              <Subtitle>collections</Subtitle>
              <Subtitle>for everyone</Subtitle>
            </Box>
            <Button>
              <CustomLink href="#newCollection">
                <Typography>
                Latest Collection
                </Typography>
              </CustomLink>
            </Button>
          </TextContainer>
          <ImageBox>
            <Image src={hero} alt="hero" />
          </ImageBox>
        </HeroContainer>
      </Box>
    </>
  );
};

export default Hero;
