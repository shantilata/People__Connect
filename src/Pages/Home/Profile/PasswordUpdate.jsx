import React, { useState } from "react";
import {
  Container,
  TitleContainer,
  Title,
  Stack,
  InfoLabel,
  EditButton,
} from "./common";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import Services from "../../../Services";

/**
 * @typedef {Object} PasswordUpdateProps
 * @property {String} id
 * @property {String} username
 *
 * @param {PasswordUpdateProps} props
 * @returns
 */
const PasswordUpdate = (props) => {
  const { id, username } = props;
  const [isUpdating, setIsUpdating] = useState(false);
  const formik = useFormik({
    initialValues: {
      username,
      currentPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
      verified: false,
    },
    onSubmit: async (data, actions) => {
      if (!data.verified) {
        const verificationResult = await Services.login(
          username,
          data.currentPassword
        );
        if (verificationResult !== null) {
          actions.setFieldValue("verified", true);
        } else {
          actions.setFieldError(
            "currentPassword",
            "Please enter your correct active password."
          );
        }
      } else {
        const checkIfPasswordsMatch =
          data.newPassword === data.newPasswordRepeat;
        if (!checkIfPasswordsMatch) {
          actions.setFieldError(
            "newPasswordRepeat",
            "Your password does not match."
          );
        } else {
          const updateResult = await Services.updateUserPassword(
            id,
            data.newPassword
          );
          if (updateResult !== null) {
            setIsUpdating(false);
          } else {
            actions.setFieldError("newPassword", "Failed to update password.");
          }
        }
      }
    },
  });
  const handleUpdateButtonClicked = () => {
    setIsUpdating((state) => !state);
  };
  const UpdateButton = () => (
    <EditButton onClick={handleUpdateButtonClicked}>
      {isUpdating ? "Cancel" : "Update Password"}
    </EditButton>
  );
  if (!isUpdating) {
    return (
      <Stack>
        <InfoLabel>Password</InfoLabel>
        <UpdateButton />
      </Stack>
    );
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        isColumn
        justifyContent="flex-start"
        alignItems="stretch"
        style={{ border: "1px solid #e0e0e0", padding: "16px" }}
      >
        <Stack>
          <InfoLabel>Update Password</InfoLabel>
          <UpdateButton />
        </Stack>
        <Stack isColumn justifyContent="flex-start" alignItems="stretch">
          <Stack>
            <Stack justifyContent="flex-start" flex="1" style={{ gap: "64px" }}>
              <InfoLabel>Old Password</InfoLabel>
              <TextField
                id="currentPassword"
                name="currentPassword"
                label="Current Password"
                placeholder="Your Current Password"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.currentPassword &&
                  Boolean(formik.errors.currentPassword)
                }
                helperText={
                  formik.touched.currentPassword &&
                  formik.errors.currentPassword
                }
              />
            </Stack>
            {!formik.values.verified && (
              <EditButton onClick={formik.handleSubmit}>Verify</EditButton>
            )}
          </Stack>
          <Stack justifyContent="flex-start"></Stack>
        </Stack>
      </Stack>
    </form>
  );
};

export default PasswordUpdate;
