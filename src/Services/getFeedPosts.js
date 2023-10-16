import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

export const getFeedPosts = async () => {
  const result = await axios.get(ENDPOINTS.posts.getFeed, baseConfig);
  if (result?.status === 200 && !!result?.data?.feedPosts) {
    return result.data.feedPosts;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to get feed posts.";
    throw new Error(reason);
  }
};
