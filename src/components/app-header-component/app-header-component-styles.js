import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

import colors from "../../constants/colors";

export const AppHeader = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: ${colors["jordy-blue"]};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AppHeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  color: ${colors["ghost-white"]};
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-family: Caveat, cursive;
  font-weight: 300;
  color: ${colors["ghost-white"]};
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow: hidden;
`;

export const NavLink = styled(RouterNavLink)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  font-weight: 500;
  color: ${colors["ghost-white"]};
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;

  &:hover {
    color: ${colors["light-cyan"]};
  }

  &.active {
    background-color: ${colors["french-sky-blue"]};
  }
`;
