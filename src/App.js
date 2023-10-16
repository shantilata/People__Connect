import styled from "@emotion/styled";
import RootRouting from "./Routing/RootRouting";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Services from "./Services";
import { updateProfile } from "./Redux/AllSlice/AuthSlice";
import { SnackbarProvider } from "notistack";
import { refreshFeed } from "./Redux/AllSlice/FeedSlice";

function App() {
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const response = await Services.getMyProfile();
      if (response !== null) dispatch(updateProfile(response));
    } catch (error) {}
  };
  useEffect(() => {
    dispatch(refreshFeed());
    fetchProfile();
  }, []);
  return (
    <AppContainer>
      <SnackbarProvider />
      <RootRouting />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100vh;
`;
