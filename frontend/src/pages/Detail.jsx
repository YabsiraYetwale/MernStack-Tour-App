import { Link, useParams } from "react-router-dom";
import Comment from "../components/comments/Comment";
import RelatedTours from "../components/relatedTours/RelatedTours";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { fetchTour, fetchTours } from "../redux/actions/tours";
import { img_url } from "../redux/api";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import {
  BoxContainer,
  CustomCardMedia,
  CustomTypography,
} from "./styles/detail.styles";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, tour, tours } = useSelector((state) => state.tours);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTour(id));
  }, [id, dispatch]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <BoxContainer>
          <Card>
            <Link to={`/tour/${tour?._id}`} />
            <CustomCardMedia src={`${img_url}${tour?.image}`} alt="image" />
            <CardContent>
              <CustomTypography>{tour?.title}</CustomTypography>
              <Typography fontWeight="bolder">
                Created By: {tour?.creatorfname} {tour?.creatorlname}
              </Typography>
                <Typography>#{tour?.tags}</Typography>
              {tour?.likes?.length > 0 && (
                <Typography>
                  {tour?.likes?.length}
                  {tour?.likes?.length > 1 ? "Likes" : "Like"}
                </Typography>
              )}{" "}
              <Typography>{moment(tour?.createdAt).fromNow()}</Typography>
              <Typography>{tour?.description}</Typography>
            </CardContent>
          </Card>
          <RelatedTours />
          <Comment />
        </BoxContainer>
      )}
    </>
  );
};
export default Detail;
