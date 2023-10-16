import styled from "@emotion/styled";

export const Stack = styled.div`
  display: flex;
  flex-direction: ${(props) => (!!props?.isColumn ? "column" : "row")};
  justify-content: ${(props) => props.justifyContent ?? "space-between"};
  align-items: ${(props) => props.alignItems ?? "center"};
  flex: ${(props) => props?.flex ?? 0};
  gap: 8px;
`;
export const Name = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const SmallText = styled.div`
  font-size: 20px;
  color: black;
`;

export const EditButton = styled.div`
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  border: 1px solid #cccccc;
  color: #888888;
  border-radius: 4px;

  &:hover {
    background-color: #e0e0e0;
  }
`;
export const InfoLabel = styled.div`
  color: #888888;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: left;
`;
export const InfoValue = styled.div`
  color: #333333;
  font-weight: bold;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: left;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 16px;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`;
export const Title = styled.div`
  font-size: 24px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  word-spacing: 4px;
  text-align: left;
`;
