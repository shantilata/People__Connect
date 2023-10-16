import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * 
 * @param {string} userId 
 * @param {File} img 
 * @returns 
 */
export const updateProfilePic = async (userId, img) => {
  const data = new FormData();
  data.append("img", img);
  const result = await axios.post(
    ENDPOINTS.user.updateProfilePic(userId),
    data,
    {
      ...baseConfig,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  if (result?.status === 200 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to update profile picture.";
    throw new Error(reason);
  }
};
