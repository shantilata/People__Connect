import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Container, Title, EditButton, TitleContainer } from "./common";
import { BaseURL } from "../../../Services/constants";
import Services from "../../../Services";
import { useDispatch } from "react-redux";
import { syncUserProfile } from "../../../Redux/AllSlice/AuthSlice";

/**
 * @typedef {Object} ProfilePictureSectionProps
 * @property {string} profilePic
 * @property {id} id
 * @property {boolean} showEdit
 *
 * @param {ProfilePictureSectionProps} props
 * @returns
 */
const ProfilePictureSection = (props) => {
  const { id, profilePic, showEdit } = props;
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(profilePic);
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const onImageChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };
  const onImageClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };
  const onSaveImage = async () => {
    if (!image) return;
    if (!id) return;
    const response = await Services.updateProfilePic(id, image);
    if (response !== null) {
      dispatch(syncUserProfile());
    }
  };
  const prepareImageUrl = (url) => {
    if (String(url).startsWith("/uploads")) {
      return BaseURL + url;
    } else return url;
  };
  useEffect(() => {
    if (!!profilePic) setImageUrl(profilePic);
    else setImageUrl("");
  }, [profilePic]);
  return (
    <Container>
      <TitleContainer>
        <Title>Profile Picture</Title>
      </TitleContainer>
      <ProfilePictureContainer>
        {profilePic.length === 0 ? (
          <NoImageText>Profile Picture</NoImageText>
        ) : (
          <ProfilePic src={prepareImageUrl(imageUrl)} onClick={onImageClick} />
        )}
        {!!showEdit && <ProfilePictureActionButtonContainer>
          <EditButton onClick={onImageClick}>Change Photo</EditButton>
          {!!image && <EditButton onClick={onSaveImage}>Save Photo</EditButton>}
          <ProfilePictureHelperText>
            At least 256x256 px recommended.
            <br />
            JPG and PNG allowed.
          </ProfilePictureHelperText>
          <HiddenInput ref={inputRef} type="file" onChange={onImageChange} />
        </ProfilePictureActionButtonContainer>}
      </ProfilePictureContainer>
    </Container>
  );
};

export default ProfilePictureSection;

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 32px;
  padding: 4px 24px;
`;
const ProfilePictureActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
`;
const ProfilePictureHelperText = styled.div`
  color: #888888;
  font-size: 16px;
  text-align: left;
`;
const HiddenInput = styled.input`
  display: none;
`;

const NoImageText = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ProfilePic = styled.div`
  width: 200px;
  height: 200px;
  background-color: whitesmoke;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  border-radius: 100px;
`;
