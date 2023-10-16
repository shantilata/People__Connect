import React from "react";
import { Stack, InfoLabel, InfoValue } from "./common";


/**
 * @typedef ViewProps
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {string} bio
 * @property {string} profilePictureUrl
 *
 * @param {ViewProps} props
 * @returns
 */
const PersonalInfoView = (props) => {
  return (
    <>
      <Stack justifyContent="flex-start">
        <Stack
          isColumn
          justifyContent="flex-start"
          alignItems="stretch"
          flex="1"
        >
          <InfoLabel>Name</InfoLabel>
          <InfoValue>{props.name}</InfoValue>
        </Stack>
        <Stack
          isColumn
          justifyContent="flex-start"
          alignItems="stretch"
          flex="1"
        >
          <InfoLabel>Email</InfoLabel>
          <InfoValue>{props.email}</InfoValue>
        </Stack>
        <Stack
          isColumn
          justifyContent="flex-start"
          alignItems="stretch"
          flex="1"
        >
          <InfoLabel>Username</InfoLabel>
          <InfoValue>{props.username}</InfoValue>
        </Stack>
      </Stack>
      <Stack isColumn justifyContent="flex-start" alignItems="stretch" flex="1">
        <InfoLabel>Bio</InfoLabel>
        <InfoValue>{props.bio}</InfoValue>
      </Stack>
    </>
  );
  // return (
  //   <Stack>
  //     <Stack isColumn justifyContent="flex-start" alignItems="stretch">
  //       <Stack>
  //         <Name>{name}</Name>
  //       </Stack>
  //       <Stack>
  //         <SmallText>Username: @{username}</SmallText>
  //       </Stack>
  //       <Stack>
  //         <SmallText>Email: {email}</SmallText>
  //       </Stack>
  //       <Stack>
  //         <SmallText>Bio: {bio}</SmallText>
  //       </Stack>
  //       <Stack>
  //         <SmallText>Account Created: {createdBy}</SmallText>
  //       </Stack>
  //       <Stack justifyContent="flex-start">
  //         <StatsButton label="followers" value={followers.length} />
  //         <StatsButton label="following" value={following.length} />
  //       </Stack>
  //     </Stack>
  //     <Stack isColumn>
  //       <ProfilePic src="https://placehold.co/400" />
  //       <EditButton onClick={handleEditProfileButtonClick}>
  //         Edit Profile
  //       </EditButton>
  //     </Stack>
  //   </Stack>
  // );
};

export default PersonalInfoView;
