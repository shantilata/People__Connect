import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * @typedef {object} UserProps
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {string} bio
 * 
 * @param {string} id 
 * @param {UserProps} data 
 * @returns 
 */
export const updateUser = async (id, data) => {
  const result = await axios.post(ENDPOINTS.user.update(id), data, baseConfig);
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to update user profile.";
    throw new Error(reason);
  }
};
