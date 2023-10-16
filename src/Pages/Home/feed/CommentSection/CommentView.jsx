import styled from "@emotion/styled";
import React from "react";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { syncUserProfile } from "../../../../Redux/AllSlice/AuthSlice";
import { loadUser } from "../../../../Redux/AllSlice/UsersSlice";

/**
 * @typedef {object} CommentViewProps
 * @property {string} userId
 * @property {string} text
 * @property {string} userProfilePic
 * @property {string} username
 * @property {string} _id
 *
 * @param {CommentViewProps} props
 * @returns
 */
const CommentView = (props) => {
  const { [props.userId]: user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  if (!user) {
    dispatch(loadUser(props.userId));
    return (
      <RowContainer>
        <Skeleton variant="circle" width={50} height={50} />
        <ColumnContainer>
          <RowContainer>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </RowContainer>
          <Skeleton variant="text" />
        </ColumnContainer>
      </RowContainer>
    );
  }
  return (
    <RowContainer>
      <ProfileAvatar
        id={props._id}
        profilePic={props.userProfilePic}
        size="medium"
      />
      <ColumnContainer>
        <RowContainer>
          <CommenterName>{user.name}</CommenterName>
          <CommenterUsername>@{props.username}</CommenterUsername>
        </RowContainer>
        <CommentText>{props.text}</CommentText>
      </ColumnContainer>
    </RowContainer>
  );
};

export default CommentView;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 8px;
  gap: 8px;
  flex: 1;
`;
const CommenterHeaderText = styled.div`
  font-size: 16px;
`;
const CommenterName = styled(CommenterHeaderText)`
  color: #333333;
  font-weight: bold;
  text-align: left;
`;
const CommenterUsername = styled(CommenterHeaderText)`
  color: #cccccc;
  text-align: left;
`;
const CommentText = styled.div`
  font-size: 18px;
  flex: 1;
  text-align: justify;
  padding: 8px;
`;
