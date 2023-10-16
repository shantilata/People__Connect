import { useFormik } from "formik";
import React from "react";

import TextField from "@mui/material/TextField";
import Services from "../../../Services";
import { Stack, Container, EditButton } from "./common";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { syncUserProfile } from "../../../Redux/AllSlice/AuthSlice";
import { enqueueSnackbar } from "notistack";

/**
 * @typedef ViewProps
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {string} bio
 * @property {string} id
 * @property {string} profilePictureUrl
 * @property {function} onComplete
 *
 * @param {ViewProps} props
 * @returns
 */
const PersonalInfoEdit = (props) => {
  const { name, email, username, bio, id, onComplete } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name,
      email,
      username,
      bio,
    },
    onSubmit: async (data) => {
      try {
        const response = await Services.updateUser(id, data);
        if (response !== null) {
          enqueueSnackbar("User profile updated successfully", {
            variant: "success",
          });
          dispatch(syncUserProfile());
          if (!!onComplete) {
            onComplete();
          }
        }
      } catch (err) {
        if (!!err.message) {
          enqueueSnackbar(err.message, {
            variant: "error",
          });
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <Stack justifyContent="flex-start">
          <Stack
            isColumn
            justifyContent="flex-start"
            alignItems="stretch"
            flex="1"
          >
            {/* <InfoLabel>Name</InfoLabel> */}
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              placeholder="Your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Stack>
          <Stack
            isColumn
            justifyContent="flex-start"
            alignItems="stretch"
            flex="1"
          >
            {/* <InfoLabel>Email</InfoLabel> */}
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              placeholder="your@email.id"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Stack>
          <Stack
            isColumn
            justifyContent="flex-start"
            alignItems="stretch"
            flex="1"
          >
            {/* <InfoLabel>Username</InfoLabel> */}
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              placeholder="your_username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Stack>
        </Stack>
        <Stack isColumn justifyContent="flex-start" alignItems="stretch">
          {/* <InfoLabel>Bio</InfoLabel> */}
          <TextField
            fullWidth
            id="bio"
            name="bio"
            label="Bio"
            placeholder="A bit about yourself!"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bio && Boolean(formik.errors.bio)}
            helperText={formik.touched.bio && formik.errors.bio}
          />
        </Stack>
        <Stack
          justifyContent="flex-end"
          alignItems="stretch"
          style={{ paddingTop: "16px" }}
        >
          <EditButton onClick={formik.handleSubmit}>Save</EditButton>
        </Stack>
      </Container>
    </form>
  );
};

export default PersonalInfoEdit;
