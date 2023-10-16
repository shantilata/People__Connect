import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";
import { enqueueSnackbar } from "notistack";

/**
 * @typedef {Object} UserResponse
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} username
 *
 * @param {string} username
 * @param {string} password
 * @returns {Promise<null | UserResponse>}
 */
export const login = async (username, password) => {
  const data = {
    username,
    password,
  };
  const result = await axios
    .post(ENDPOINTS.user.login, data, baseConfig)
    .catch((err) => {
      if (err?.response?.data?.message) {
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
        });
      }
      return err;
    });
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else {
      const reason = !!result?.response?.data?.message
        ? result.response.data.message
        : "Failed to log in!";
      throw new Error(reason);
  }
};
