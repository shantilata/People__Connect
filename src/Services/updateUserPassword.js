import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * 
 * @param {string} userId 
 * @param {string} password 
 * @returns 
 */
export const updateUserPassword = async (userId, password) => {
  const data = {
    password,
  };
  const result = await axios.post(
    ENDPOINTS.user.updateUserPassword(userId),
    data,
    baseConfig
  );
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to update user's password.";
    throw new Error(reason);
  }
};
