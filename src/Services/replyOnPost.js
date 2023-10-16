import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 *
 * @param {number} postId
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export const replyOnPost = async (postId, text) => {
  const data = { text };
  const result = await axios.post(
    ENDPOINTS.posts.replyPost(postId),
    data,
    baseConfig
  );
  if (result?.status === 200) {
    return true;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to reply on a post!";
    throw new Error(reason);
  }
};
