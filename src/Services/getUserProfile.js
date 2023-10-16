import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * @typedef {object} UserProfileResponse
 * @property {string} _id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {string} profilePic
 * @property {Array} followers
 * @property {Array} following
 * @property {string} bio
 * @property {string} createdAt
 * @property {number} __v
 *
 * @returns {Promise<null | UserProfileResponse>}
 */
export const getUserProfile = async (username) => {
  const result = await axios.get(ENDPOINTS.user.userProfile(username), baseConfig);
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to get user profile by username.";
    throw new Error(reason);
  }
};
