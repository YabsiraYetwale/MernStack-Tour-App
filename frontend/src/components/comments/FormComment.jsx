import { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { commentTour } from "../../redux/actions/tours";
import {
    CommentButton,
    CustomAccountBox,
    CustomTextField,
    Form,
  } from "./styles";

const FormComment = () => {
    const [formData, setFormData] = useState({ comment: [] });
    const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const handleComment = (e) => {
        e.preventDefault();
        dispatch(
          commentTour(
            id,
            { ...formData, commentator: user?.result?.firstname },
            navigate
          )
        );
      };

  return (
    <>
     <Form onSubmit={handleComment}>
            <CustomAccountBox />
            <CustomTextField
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              label="Join the discussion ..."
              placeholder="Join the discussion ..."
            />
            <CommentButton onClick={handleComment} variant="outlined">
              comment
            </CommentButton>
        </Form>
    </>
  )
}

export default FormComment