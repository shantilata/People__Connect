import React, { useState } from "react";
import {
  Container,
  TitleContainer,
  Title,
  Stack,
  InfoLabel,
  EditButton,
} from "./common";
import PasswordUpdate from "./PasswordUpdate";
/**
 * @typedef {Object} SecuritySectionProps
 * @property {String} id
 * @property {String} username
 *
 * @param {SecuritySectionProps} props
 * @returns
 */
const SecuritySection = (props) => {
  const { id, username } = props;
  return (
    <Container>
      <TitleContainer>
        <Title>Security</Title>
      </TitleContainer>
      <Stack isColumn justifyContent="flex-start" alignItems="stretch">
        <PasswordUpdate id={id} username={username} />
        <Stack>
          <InfoLabel>Account</InfoLabel>
          <EditButton>Delete Account</EditButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SecuritySection;
