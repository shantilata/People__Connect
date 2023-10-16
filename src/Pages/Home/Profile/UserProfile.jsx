import React from "react";
import { useLoaderData } from "react-router-dom";
import ProfileView from "./ProfileView";

const UserProfile = () => {
  const { user } = useLoaderData();
  return <ProfileView user={user} />;
};

export default UserProfile;
