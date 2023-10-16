import axios from "axios";
import { ENDPOINTS, baseConfig } from "./constants";

/**
 * @typedef {object} Response
 * @property {string} message
 * @property {object} newPost
 * @property {string} newPost.postedBy
 * @property {string} newPost.text
 * @property {string} newPost.img
 * @property {} newPost.likes
 * @property {string} newPost._id
 * @property {} newPost.replies
 * @property {string} newPost.createdAt
 * @property {string} newPost.updatedAt
 * @property {number} newPost.__v
 * 
 * @param {*} text 
 * @param {*} img 
 * @returns {Promise<Response>}
 */
export const createPost = async (text, img) => {
    const data = new FormData();
    data.append('text', text);
    data.append('img', img);
    const result = await axios.post(ENDPOINTS.posts.createPost, data, {
      ...baseConfig,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  if (result?.status === 201 && !!result?.data) {
    return result.data;
  } else {
    const reason = !!result?.response?.data?.message
      ? result.response.data.message
      : "Failed to create a post!";
    throw new Error(reason);
  }
};
