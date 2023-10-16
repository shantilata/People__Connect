import React from "react";
import styled from "@emotion/styled";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import LoadingComponent from "../LoadingComponent";

const Layout = () => {
  const { isAuthenticating, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  if (isAuthenticating) {
    return <LoadingComponent />
  }
  if (!isAuthenticated) {
    return <Navigate to="/log-in" />;
  } else {
    return (
      <GridContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </GridContainer>
    );
  }
};

export default Layout;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
`;
const SideBarContainer = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 16px;
  background-color: whitesmoke;
  border-right: 1px solid #e0e0e0;
`;
const OutletContainer = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 16px 160px;
  flex: 1;
  background-color: whitesmoke;
  gap: 8px;
  overflow: auto;
`;
