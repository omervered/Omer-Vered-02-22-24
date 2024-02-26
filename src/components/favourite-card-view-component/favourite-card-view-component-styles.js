import styled from "styled-components";

export const cardWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const IconWrapper = styled.div`
  width: 130px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 50px;
  }
`;

export const Icon = styled.img`
  width: 80%;
  height: 80%;
`;
