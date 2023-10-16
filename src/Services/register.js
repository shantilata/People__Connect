import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";
import { enqueueSnackbar } from 'notistack'

/**
 * @typedef {Object} UserResponse
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} username
 *
 * @param {string} name
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @returns {Promise<null | UserResponse>}
 */
export const register = async (name, email, username, password) => {
  const data = {
    name,
    email,
    username,
    password,
  };
  const result = await axios
    .post(ENDPOINTS.user.registration, data, baseConfig)
    .catch((err) => {
      if (err?.response?.data?.message) {
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
        });
      }
      return err;
    });
  if (result?.status === 201 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to log out!";
    throw new Error(reason);
  }
};
