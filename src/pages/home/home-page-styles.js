import styled from "styled-components";

import colors from "../../constants/colors";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomePageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 563px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 25px;
  padding: 50px;
  /* background-color: ${colors["alice-blue"]}; */
  background-color: ${(props) => props.theme.containerBackground};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid ${colors["alice-blue-dark"]};
  border-radius: 10px;
`;
