import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../Redux/AllSlice/AuthSlice";
import { css } from "@emotion/react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
const LOGO_IMAGE_SRC = "/assets/logo.png";

const Demo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser(navigate));
  };
  return (
    <Container>
      <Logo src={LOGO_IMAGE_SRC} />
      <Title>People Connect</Title>
      <ButtonLink to="/feed" active={String(pathname === "/feed")}>
        <DynamicFeedIcon size={20} />
        Feed
      </ButtonLink>
      <ButtonLink
        to="/feed/create"
        active={String(pathname === "/feed/create")}
      >
        <AddCircleOutlineIcon size={20} />
        Create New Post
      </ButtonLink>
      <ButtonLink
        to="/profile"
        active={String(pathname === "/profile")}
      >
        <AccountCircleIcon size={20} />
        Profile
      </ButtonLink>
      <Footer>
        <ButtonLink onClick={handleLogout} color="red">
          <LogoutIcon size={20} />
          Log Out
        </ButtonLink>
        <ButtonLink to="/">About</ButtonLink>
      </Footer>
    </Container>
  );
};

export default Demo;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: whitesmoke;
`;

const ButtonLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.color ?? "darkgreen"};
  width: 200px;
  padding: 4px 8px;
  transition: all 0.2s linear;
  border: none;
  text-decoration: none;

  &:hover {
    padding: 4px 24px;
    margin: 0px;
    gap: 16px;
  }
  ${(props) =>
    props?.active === "true" &&
    css`
      border-radius: 8px;
      border: 1px solid darkgreen;
    `}
`;

const Logo = styled.img`
  height: auto;
  width: 100px;
  margin: 0px auto;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: purple;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
const Footer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
`;
