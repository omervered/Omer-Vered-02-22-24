import styled from "styled-components";
import colors from "../../constants/colors";

export const UserMsgContainer = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 4px 6px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const UserMsgType = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
