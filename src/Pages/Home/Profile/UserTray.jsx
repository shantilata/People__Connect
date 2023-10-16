import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Title, TitleContainer } from "./common";
import { useSelector } from "react-redux";
import ProfileAvatar from "./ProfileAvatar";

/**
 * @typedef {object} UserTrayProps
 * @property {Array<string>} users
 * @property {string} title
 *
 * @param {UserTrayProps} props
 * @returns
 */
const UserTray = (props) => {
  const { users, title } = props;
  const allUsers = useSelector((state) => state.users);
  const allUserProfiles = useMemo(() => {
    const userProfiles = users?.map((user) => allUsers[user]);
    return userProfiles;
  }, [users, users]);
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Container>
        {allUserProfiles?.map((user) => {
          console.log(user)
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
      </Container>
    </Wrapper>
  );
};

export default UserTray;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 8px;
  padding: 16px;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background-color: white;
`;
