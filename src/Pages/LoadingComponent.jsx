import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import React from "react";

const LoadingComponent = () => {
    return <Modal open={true}>
        <Backdrop>
            <Text>Loading... Please wait.</Text>
      </Backdrop>
  </Modal>;
};

export default LoadingComponent;

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(4px);
  background-color: #00000077;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Text = styled.div`
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
