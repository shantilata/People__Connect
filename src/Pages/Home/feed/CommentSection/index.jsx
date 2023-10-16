import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Services from "../../../../Services";
import { refreshPostById } from "../../../../Redux/AllSlice/FeedSlice";
import { enqueueSnackbar } from "notistack";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import CommentView from "./CommentView";

/**
 * @typedef {object} ReplyProps
 * @property {number} userId
 * @property {string} text
 * @property {string} userProfilePic
 * @property {string} username
 *
 * @typedef {object} Props
 * @property {Array.<ReplyProps>} replies
 * @property {string} postId
 *
 * @param {Props} props
 * @returns
 */
const CommentSection = (props) => {
  const [replyText, setReplyText] = useState("");
  const dispatch = useDispatch();
  const { profilePic } = useSelector((state) => state.auth);
  const handleReply = async () => {
    try {
      const response = await Services.replyOnPost(props.postId, replyText);
      if (response === true) {
        dispatch(refreshPostById(props.postId));
      }
      setReplyText("");
    } catch (error) {
      enqueueSnackbar("Failed to reply on this post.", {
        variant: "error",
      });
    }
  };
  return (
    <Container>
      {Array.isArray(props.replies)
        ? props.replies.map((reply) => (
            <CommentView key={reply._id} {...reply} />
          ))
        : null}
      <InputContainer>
        <ProfileAvatar profilePic={profilePic} size="small" />
        <TextField
          name="replyText"
          value={replyText}
          label="Comment"
          onChange={(e) => {
            setReplyText(e.target.value);
          }}
          placeholder={"Reply to this post..."}
          fullWidth
        />
        <Button onClick={handleReply}>Reply</Button>
      </InputContainer>
    </Container>
  );
};

export default CommentSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: white;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
