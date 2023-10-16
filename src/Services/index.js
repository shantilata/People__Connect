import { login } from "./login";
import { register } from "./register";
import { logout } from "./logout";
import { getUserProfile } from "./getUserProfile";
import { getMyProfile } from "./getMyProfile";
import { followUser } from "./followUser";
import { getMyPosts } from "./getMyPosts";
import { getFeedPosts } from "./getFeedPosts";
import { createPost } from "./createPost";
import { getPostById } from "./getPostById";
import { likePost } from "./likePost";
import { replyOnPost } from "./replyOnPost";
import { updateProfilePic } from "./updateProfilePic";
import { updateUser } from "./updateUser";
import { updateUserPassword } from "./updateUserPassword";
import { getUserProfileById } from "./getUserProfileById";
import { getUserPosts } from "./getUserPosts";
const Services = {
  login,
  register,
  logout,
  getMyProfile,
  getUserProfile,
  followUser,
  getMyPosts,
  getFeedPosts,
  createPost,
  getPostById,
  likePost,
  replyOnPost,
  updateProfilePic,
  updateUser,
  updateUserPassword,
  getUserProfileById,
  getUserPosts
};
export default Services;
