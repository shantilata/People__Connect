import React from 'react'
import styled from "@emotion/styled";

const StatsButton = ({ label, value }) => {
  return (
    <StatsButtonWrapper>
      <StatsButtonLabel>{label}</StatsButtonLabel>
      <StatsButtonValue>{value}</StatsButtonValue>
    </StatsButtonWrapper>
  );
};

export default StatsButton

const StatsButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  width: 200px;
  background-color: darkgray;
`;

const StatsButtonLabel = styled.div`
  font-size: 16px;
  color: whitesmoke;
  margin-left: 16px;
`;

const StatsButtonValue = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
  padding: 8px;
  border-left: 1px solid darkgray;
`;
