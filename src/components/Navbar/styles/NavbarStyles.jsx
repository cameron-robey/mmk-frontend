import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  & > a {
    cursor: pointer;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  z-index: 2;
  width: calc(100% - 120px);
`;

export const NavListItem = styled.li`
  float: left;
`;

export const NavListItemRight = styled.li`
  float: right;
  font-size: 20px;
`;

const LogoShake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const NavLogoLink = styled(Link)`
  top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 41px;
  position: fixed;
  z-index: 4;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLogo = styled.img`
  width: 80px;
  vertical-align: middle;

  &:hover {
    animation: ${LogoShake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

export const NavTextLink = styled(Link)`
  padding-left: 16px;
  padding-right: 16px;
  height: 51px;
  line-height: 51px;

  display: block;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: background-color 200ms linear;
`;

export const NavTextA = styled.a`
  padding-left: 16px;
  padding-right: 16px;
  height: 51px;
  line-height: 51px;

  display: block;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: background-color 200ms linear;
`;

export const Nav = styled.div`
  z-index: 2;
  position: fixed;
  top: 0px;
  width: 100%;
  padding-left: 100px;
  height: 51px;
  transition: background-color 0.5s;

  ${props => (props.colored) ? 'background-color: #464646 !important;' : ''}

  & > ${NavList} > ${NavListItem} > ${NavTextLink}, & > ${NavList} > ${NavListItemRight} > ${NavTextA} {
    
    &:hover {
      ${props => (props.colored) ? `background-color: #575656 !important;` : ''}
    }
  }

  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

// Mobile nav

export const NavMobile = styled.div`
  display: none;
  z-index: 3;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 51px;
  background-color: #464646 !important;
  transition: background-color 200ms linear;
  line-height: 51px;
  margin: 0;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const NavMobileContainer = styled.div``;

export const NavLogoLinkMobile = styled(Link)`
  padding: 2px 4px 2px 0;
  float: left;
`;

export const NavLogoMobile = styled.img`
  height: 51px;
`;

export const NavMenuButton = styled(Link)`
  padding: 0 20px;
  float: left;
  text-decoration: none;
  cursor: pointer;
  height: 51px;

  &:hover {
    background-color: #393939 !important;
  }
`;

export const NavMenuButtonRight = styled.div`
  padding: 0 20px;
  float: left;
  text-decoration: none;
  cursor: pointer;
  float: right;
  height: 51px;

  &:hover {
    background-color: #393939 !important;
  }
`;

export const NavMenuButtonText = styled.p`
  font-weight: 900;
  color: #fff;
  margin: 0px;
  line-height: 51px;
`;

export const NavDropdown = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 51px;
  z-index: 2;
  display: none;
  background: #fff;
  border-bottom: 4px solid #464646;

  overflow-y: hidden;
	max-height: ${props => props.navOpen ? '500px' : '0px'};

	transition: max-height 0.5s ease-in-out;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const NavListMobile = styled.ul``;

export const NavListItemMobile = styled.li`
  list-style: none;
`;

export const NavTextLinkMobile = styled(Link)`
  padding-left: 16px;
  padding-right: 16px;
  height: 51px;
  line-height: 51px;

  display: block;
  text-decoration: none;
  transition: background-color 200ms linear;

  text-decoration: none;
  color: #464646;
`;

