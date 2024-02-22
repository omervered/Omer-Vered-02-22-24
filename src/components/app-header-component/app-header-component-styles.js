import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

import colors from "../../constants/colors";

export const AppHeader = styled.header`
  height: 80px;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: ${colors["jordy-blue"]};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AppHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 20px;
`;

export const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${colors["ghost-white"]};
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-family: Caveat, cursive;
  font-size: 18px;
  font-weight: 400;
  color: ${colors["ghost-white"]};
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;

export const NavLink = styled(RouterNavLink)`
  font-size: 18px;
  font-weight: 500;
  color: ${colors["ghost-white"]};
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 8px 16px;
  border-radius: 8px;

  &:hover {
    color: ${colors["light-cyan"]};
  }

  &.active {
    background-color: ${colors["french-sky-blue"]};
  }
`;
