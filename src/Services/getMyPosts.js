import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

export const getMyPosts = async () => {
    const result = await axios.get(ENDPOINTS.posts.getMyPosts, baseConfig);
    if (result?.status === 200 && !!result?.data?.feedPosts) {
      return result.data.feedPosts;
    } else {
      const reason = !!result?.response?.data?.message
        ? result.response.data.message
        : "Failed to get user's posts!";
      throw new Error(reason);
    }
}
