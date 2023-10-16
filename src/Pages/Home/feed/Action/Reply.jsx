import React from "react";
import styled from "@emotion/styled";
import CommentIcon from "@mui/icons-material/Comment";
import AddCommentIcon from "@mui/icons-material/AddComment";

/**
 * @typedef {object} ReplyProps
 * @property {number} userId
 * @property {string} text
 * @property {string} userProfilePic
 * @property {string} username
 *
 * @typedef {object} Props
 * @property {Array.<ReplyProps>} replies
 *
 * @param {Props} props
 * @returns
 */
const Reply = (props) => {
  const { replies } = props;
  const hasAnyComments = Array.isArray(replies) && replies.length > 0;
  return (
    <Container>
      {hasAnyComments ? (
        <CommentIcon size={30} />
      ) : (
        <AddCommentIcon size={30} />
      )}
      <RepliesCount>{replies?.length}</RepliesCount>
    </Container>
  );
};

export default Reply;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const RepliesCount = styled.div`
  font-size: 22px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: regular;
`;
