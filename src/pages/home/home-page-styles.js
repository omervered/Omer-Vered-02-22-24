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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 25px;
  padding: 50px;
  background-color: ${colors["alice-blue"]};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid ${colors["alice-blue-dark"]};
  border-radius: 10px;
`;
