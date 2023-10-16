import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * 
 * @param {string} userId 
 * @returns {Promise<boolean>}
 */
export const followUser = async (userId) => {
    const data = {};
    const result = await axios.post(ENDPOINTS.user.follow(userId), data, baseConfig);
    if (result?.status === 200) {
      return true;
    } else {
      const reason = !!result?.response?.data?.message
        ? result.response.data.message
        : "Failed to follow user!";
      throw new Error(reason);
    }
}
