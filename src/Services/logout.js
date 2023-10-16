import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 *
 * @returns {Promise<boolean>}
 */
export const logout = async () => {
  const data = {};
  const result = await axios.post(ENDPOINTS.user.logout, data, baseConfig);
  if (result?.status === 200) {
    return true;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to log out!";
    throw new Error(reason);
  }
};
