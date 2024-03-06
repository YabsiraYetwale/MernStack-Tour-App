import { styled} from '@mui/material/styles';
import { Card, CardMedia, Typography } from '@mui/material'

export const StyledCard = styled(Card)({
  width:' 270px',
})


export const StyledCardMedia = styled(CardMedia)({
  minHeight:' 300px',
  transition:' all 3s',
})
export const StyledTypography = styled(Typography)({
  color:' rgba(75, 68, 68, 0.9)'
})

export const StyledPriceContainer = styled('div')({
  fontWeight:'bolder',
  display:' flex',
  gap:' 18px',
})

export const StyledOldPriceTypography = styled(Typography)({
  textDecoration:'line-through',
  color:' rgba(131, 127, 127, 0.5)'
})