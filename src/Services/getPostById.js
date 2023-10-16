import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

export const getPostById = async (postId) => {
    const endpoint_url = ENDPOINTS.posts.getPostById(postId)
  const result = await axios.get(endpoint_url, baseConfig);
  if (result?.status === 200 && !!result?.data?.post) {
    return result.data.post;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to get post by id.";
    throw new Error(reason);
  }
};
