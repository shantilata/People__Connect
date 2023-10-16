import React from "react";
import { BaseURL } from "../../../Services/constants";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

/**
 * @typedef {object} ProfileAvatarProps
 * @property {string} profilePic
 * @property {"big" | "small" | "medium" | number} size
 * @property {string} title
 * @property {string} id
 *
 * @param {ProfileAvatarProps} props
 * @returns
 */
const ProfileAvatar = (props) => {
  const navigate = useNavigate();
  const profilePic =
    !!props.profilePic && String(props.profilePic).startsWith("/uploads")
      ? BaseURL + props.profilePic
      : "/assets/user.png";
  const getSize = (size) => {
    switch (size) {
      case "big":
        return 200 + "px";
      case "medium":
        return 50 + "px";
      case "small":
        return 30 + "px";
      default:
        return size;
    }
  };
  const handleClick = () => {
    if (props?.id) {
      navigate("/user/" + props.id);
    }
  };
  return (
    <ProfileImage
      src={profilePic}
      title={props.title}
      size={getSize(props.size)}
      onClick={handleClick}
    />
  );
};

export default ProfileAvatar;

const ProfileImage = styled.img`
  width: ${(props) => props?.size || "50px"};
  height: ${(props) => props?.size || "50px"};
  border-radius: ${(props) => props?.size / 2 || "25px"};
`;
