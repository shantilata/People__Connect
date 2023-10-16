import styled from "@emotion/styled";
import React, { useState } from "react";
import {
  EditButton,
  Container,
  Title,
  TitleContainer,
} from "./common";
import PersonalInfoEdit from "./PersonalInfoEdit";
import PersonalInfoView from "./PersonalInfoView";
import ProfilePictureSection from "./ProfilePictureSection";
import SecuritySection from "./SecuritySection";
import UserTray from "./UserTray";
import TopBar from "../feed/TopBar";

/**
 * @typedef {object} UserProps
 * @property {string} name
 * @property {string} username
 * @property {string} profilePic
 * @property {string} email
 * @property {string} bio
 * @property {string} _id
 * @property {Array<string>} followers
 * @property {Array<string>} following
 * 
 * @typedef {object} ProfileViewProps
 * @property {boolean} self
 * @property {UserProps} user
 * 
 * @param {ProfileViewProps} props
 * @returns 
 */
const ProfileView = (props) => {
  const { name, username, profilePic, email, bio, _id, followers, following } = props.user;
  const [isEditing, setIsEditing] = useState(false);
  const handleEditButton = () => {
    setIsEditing((state) => !state);
  };
  return (
    <Wrapper>
      <TopBar title="Profile" />
      <ProfilePictureSection profilePic={profilePic} id={_id} showEdit={props.self} />
      <UserTray title="Followers" users={followers} />
      <UserTray title="Following" users={following} />
      <Container>
        <TitleContainer>
          <Title>Personal Information</Title>
          {!!props.self && <EditButton onClick={handleEditButton}>
            {isEditing ? "Cancel" : "Edit"}
          </EditButton>}
        </TitleContainer>
        {isEditing && props.self ? (
          <PersonalInfoEdit
            name={name}
            username={username}
            email={email}
            bio={bio}
            id={_id}
            onComplete={() => {
              setIsEditing(false);
            }}
          />
        ) : (
          <PersonalInfoView
            name={name}
            username={username}
            email={email}
            bio={bio}
          />
        )}
      </Container>
      {props.self && <SecuritySection id={_id} username={username} />}
    </Wrapper>
  );
};

export default ProfileView;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  background-color: whitesmoke;
`;
