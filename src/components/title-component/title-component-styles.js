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
  font-size: ${(props) => props.$titleSize};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: Caveat, cursive;
  font-weight: 400;
  margin: 0;
  font-size: ${(props) => props.$subtitleSize};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
