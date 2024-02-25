import styled from "styled-components";

import colors from "../../constants/colors";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-family: Caveat, cursive;
  font-weight: 500;
  margin: 0;
  font-size: ${(props) => props.size};
`;

export const Subtitle = styled.h2`
  font-family: Caveat, cursive;
  font-weight: 300;
  margin: 0;
  font-size: ${(props) => props.size};
`;
