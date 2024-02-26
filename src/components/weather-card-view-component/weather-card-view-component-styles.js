import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TempWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const IconWrapper = styled.div`
  width: 130px;
  height: 80px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2px;
  gap: 5px;

  @media (max-width: 768px) {
    width: 80px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 20px;
  }
`;

export const Icon = styled.img`
  width: 70%;
  height: 70%;
`;

export const Link = styled.a`
  text-decoration: none;
`;
