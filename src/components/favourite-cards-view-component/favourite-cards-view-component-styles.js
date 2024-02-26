import styled from "styled-components";

export const FavouriteCardsViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px;
  gap: 25px;
  border-radius: 8px;
`;

export const FavouriteCardViewWrapper = styled.div`
  min-width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
`;
