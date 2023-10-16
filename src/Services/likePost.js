import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 *
 * @param {number} postId
 * @returns {Promise<boolean>}
 */
export const likePost = async (postId) => {
  const data = {};
  const result = await axios.post(
    ENDPOINTS.posts.likePost(postId),
    data,
    baseConfig
  );
  if (result?.status === 200) {
    return true;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to like a post!";
    throw new Error(reason);
  }
};
