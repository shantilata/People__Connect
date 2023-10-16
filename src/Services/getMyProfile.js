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
export const getMyProfile = async () => {
  const result = await axios.get(ENDPOINTS.user.myProfile, baseConfig);
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to get user's profile!";
    throw new Error(reason);
  }
};
