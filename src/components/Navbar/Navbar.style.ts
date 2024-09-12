import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const NavbarLogo = styled.img`
  width: 100px;
`;

export const NavbarMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const NavbarMenuImage = styled.img`
  width: 50px;
`;

export const NavbarMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  list-style-type: none;
  padding: 0;
  margin: 0;
  
`;

export const NavbarMenuItem = styled.li`
  margin: 10px;
`;

export const NavbarMenuLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

