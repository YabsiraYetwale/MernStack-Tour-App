import React from 'react'
import {Link} from 'react-router-dom'
import {CardActionArea,CardContent,Typography } from '@mui/material'
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  PriceContainer,
  StyledOldPriceTypography,
} from './styles';
import { img_url } from '../../api'
const NewCollection = ({ newCollection }) => {
  return (
    <>
      <StyledCard>
        <CardActionArea>
          <Link to={`/product/${newCollection._id}`}>
            <StyledCardMedia
              image={`${img_url}${newCollection.image}`}
              alt="img"
            />
          </Link>
          <CardContent>
            <StyledTypography>{newCollection.title}</StyledTypography>
            <PriceContainer>
              <Typography>${newCollection.newPrice}</Typography>
              <StyledOldPriceTypography>${newCollection.oldPrice}</StyledOldPriceTypography>
            </PriceContainer>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </>
  );
};

export default NewCollection;