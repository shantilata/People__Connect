export const ENDPOINTS = {
  user: {
    login: "/users/login",
    registration: "/users/signup",
    logout: "/users/logout",
    myProfile: "/users/profile",
    userProfile: (username) => `/users/profile/${username}`,
    userProfileById: (id) => `/users/byId/${id}`,
    follow: (userId) => `/users/follow/${userId}`,
    update: (userId) => `/users/update/user/${userId}`,
    updateProfilePic: (userId) => `/users/update/profilePic/${userId}`,
    updateUserPassword: (userId) => `/users/update/password/${userId}`,
  },
  posts: {
    getPostById: (postId) => `/posts/get/${postId}`,
    getMyPosts: "/posts/myPosts",
    getUserPosts: (id) => `/posts/userPosts/${id}`,
    getFeed: "/posts/feed",
    createPost: "/posts/create",
    likePost: (id) => `/posts/like/${id}`,
    replyPost: (id) => `/posts/reply/${id}`,
    deletePost: (id) => `/posts/${id}`,
  },
};

export const BaseURL = "http://localhost:5000";

export const baseConfig = {
  baseURL: BaseURL + "/api",
  withCredentials: true
}
