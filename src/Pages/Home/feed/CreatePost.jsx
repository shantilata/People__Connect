import React, { useCallback, useRef, useState } from "react";
import styled from "@emotion/styled";
import Services from "../../../Services";
import TopBar from "./TopBar";
import { EditButton } from "../Profile/common";
import { TextareaAutosize } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { refreshPostById } from "../../../Redux/AllSlice/FeedSlice";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState();
  const [text, setText] = useState("");

  const onImageChange = (event) => {
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
  const handleSubmit = async (txt, imgBlob) => {
    try {
      const res = await Services.createPost(txt, imgBlob);
      enqueueSnackbar(res.message, {
        variant: "success"
      });
      dispatch(refreshPostById(res.newPost._id))
      navigate("/post/"+res.newPost._id)
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error"
      })
    }
  };
  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };
  const submitHandler = useCallback(
    () => handleSubmit(text, image),
    [text, image]
  );
  return (
    <>
      <TopBar title="Create Post" />
      <Container>
        <HiddenInput ref={inputRef} type="file" onChange={onImageChange} />
        {imageUrl.length === 0 ? (
          <NoImageText onClick={onImageClick}>
            Please click here to select an image.
          </NoImageText>
        ) : (
          <Image src={imageUrl} onClick={onImageClick} />
        )}
        <TextAreaInput
          minRows={6}
          placeholder="Your thoughts about this"
          value={text}
          onChange={handleTextAreaChange}
        />
        <Row>
          <SubmitButton onClick={submitHandler}>Post</SubmitButton>
        </Row>
      </Container>
    </>
  );
};

export default CreatePost;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 16px;
  background-color: whitesmoke;
  gap: 16px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const NoImageText = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.div`
  display: block;
  cursor: pointer;
  width: 100%;
  height: auto;
  min-height: 300px;
  position: relative;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s ease;

  &:hover {
    background-size: cover;
  }
`;

const TextAreaInput = styled(TextareaAutosize)`
  padding: 8px;
  border: 1px solid gray;
  outline: none;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const SubmitButton = styled(EditButton)`
  width: 200px;
`;
