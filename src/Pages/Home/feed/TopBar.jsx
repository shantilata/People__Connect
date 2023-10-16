import styled from "@emotion/styled";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
const TopBar = (props) => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Title>{props.title}</Title>
      <ArrowBackIcon size={25} onClick={handleBackButtonClick} />
    </Container>
  );
};

export default TopBar;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white;
  margin: 8px 0px;
`;
const Title = styled.div`
  font-size: 20px;
`;
