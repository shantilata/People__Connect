import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProfileAvatar from "../Profile/ProfileAvatar";

/**
 * @typedef {object} LikeProps
 * @property {Array.<string>} likesFrom
 *
 * @param {LikeProps} props
 * @returns
 */
const LikeSection = (props) => {
  const { likesFrom } = props;
  const users = useSelector((state) => state.users);
  const allUsers = useMemo(() => {
    const likedBy = likesFrom?.map((userId) => users[userId]);
    return likedBy;
  }, [users, likesFrom]);
  const getLikeText = (count) => {
    if (!count) {
      return "Sorry, Could not fetch the list of friends who liked this post.";
    }
    switch (count) {
      case 0:
        return "Be the first one to like this post.";
      case 1:
        return `${count} friend have liked this post.`;
      default:
        return `${count} friends have liked this post.`;
    }
  };
  return (
    <Container>
      {allUsers?.map((user) => {
        return (
          <ProfileAvatar
            key={user?._id}
            id={user?._id}
            profilePic={user?.profilePic || ""}
            title={user?.name}
            size="20px"
          />
        );
      })}
      {likesFrom?.length > 0 && <Divider />}
      <Text>{getLikeText(likesFrom?.length)}</Text>
    </Container>
  );
};

export default LikeSection;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  gap: 8px;
  padding: 16px;
`;
const Divider = styled.div`
  width: 1px;
  height: 25px;
  background-color: #e0e0e0;
  content: " ";
`;
const Text = styled.div`
  font-size: 16px;
  color: #888888;
  flex: 1;
  text-align: left;
`;
