import React, {
  // useEffect, useState
} from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import IntroBox from "./IntroBox";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { FormContainer, MainLogo, MainLogoURL } from "./commonComponents";
const Layout = () => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  // const [tipTextIndex, setTipTextIndex] = useState();

  // useEffect(() => {
  //   let timer;
  //   if (!auth.isAuthenticating) {
  //     timer = setInterval(
  //       (index, setIndex) => {
  //         if (typeof index === "number" && index < Tips.length) {
  //           setIndex(index + 1);
  //           console.log("Tip: ", Tips[index]);
  //         } else {
  //           setIndex(0);
  //         }
  //       },
  //       1000,
  //       tipTextIndex,
  //       setTipTextIndex
  //     );
  //   }
  //   return () => {
  //     if (!!timer) {
  //       clearInterval(timer);
  //       setTipTextIndex(undefined);
  //     }
  //   };
  // }, [auth.isAuthenticating]);
// 
  // const spinnerTextIndex = tipTextIndex ?? 0;
  if (!!auth.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <Container>
      <Content>
        <div>
          <IntroBox />
        </div>
        <div>
          <FormContainer>
            <MainLogo src={MainLogoURL} />
            {!!auth.isAuthenticating ? (
              <SpinnerContainer>
                <CircularProgress />
                <SpinnerText>{Tips[0]}</SpinnerText>
              </SpinnerContainer>
            ) : (
              <Outlet />
            )}
          </FormContainer>
        </div>
      </Content>
    </Container>
  );
};

export default Layout;

const Tips = [
  "We are getting you in...",
  "Share your thoughts with people...",
  "Follow and make a community with people...",
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: pink;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: 16px auto;
  height: 80%;
  min-height: 600px;
  width: 90%;
  min-width: 300px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    min-width: 800px;
    width: 60%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex: 1;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SpinnerText = styled.div`
  margin-top: 32px;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
