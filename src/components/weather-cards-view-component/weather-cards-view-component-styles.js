import styled from "styled-components";

export const WeatherCardsViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentDayCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const IconWrapper = styled.div`
  width: 150px;
  height: 100px;

  @media (max-width: 768px) {
    width: 90px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 30px;
  }
`;

export const FavouriteWrapper = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 30px;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
