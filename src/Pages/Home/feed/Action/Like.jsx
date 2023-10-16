import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Services from "../../../../Services";
import { refreshPostById } from "../../../../Redux/AllSlice/FeedSlice";

/**
 * @typedef {object} LikeProps
 * @property {Array.<number>} likesFrom
 * 
 * @param {LikeProps} props
 * @returns
 */
const Like = (props) => {
  const { _id } = useSelector((state) => state.auth);
  const { likesFrom, postId } = props;
  const dispatch = useDispatch();
  const hasUserLiked =
    Array.isArray(likesFrom) &&
    likesFrom.findIndex((userId) => userId === _id) > -1;
  const handleClickOnLike = async () => {
    try {
      const res = await Services.likePost(postId);
      if (res === true) dispatch(refreshPostById(postId));
    } catch (error) {}
  };
  return (
    <Container>
      {hasUserLiked ? (
        <FavoriteIcon style={{ color: "#D22B2B" }} size={30} />
      ) : (
        <FavoriteBorderIcon
          onClick={handleClickOnLike}
          style={{ color: "#D22B2B" }}
          size={30}
        />
      )}
      <LikesCount hasUserLiked={hasUserLiked}>{likesFrom?.length}</LikesCount>
    </Container>
  );
};

export default Like;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const LikesCount = styled.div`
  font-size: 22px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: ${(props) => (!!props?.hasUserLiked ? "bold" : "regular")};
`;
