import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.div`
  background-color: #444;
`;

export const ContentWrapper = styled.div`
  width: 60%;
  margin: auto;
  padding: 100px 0;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 90%;
    padding: 50px 0;
  }
`;

export const FooterDivider = styled.div`
  display: ${props => props.onlyMobile ? 'none' : 'block'};
  background-color: #aaa;
  width: 100%;
  height: 1px;
  margin: 30px 0;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const WideSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const ContentSection = styled.div`
  width: ${props => props.width};
  display: inline-block;

  text-align: ${props => props.right ? 'right' : 'left'};

  ${props => props.padding ? 'padding-left: 20px;' : ''}
  @media (max-width: 900px) {
    width: 100%;
    text-align: left;
    display: block;
    padding-left: 0;
  }
`;

export const SectionTitle = styled.p`
  margin: 10px 0;

  font-size: 1rem;
  
  color: #49a2de;
  font-weight: 900;
  `;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 900;
`;

export const FooterItem = styled.div`
  margin: 10px 0;
  display: inline-block;
  width: 100%;
`;

export const FooterItemDiscover = styled.div`
  margin: 10px 0;
  width: 50%;
  display: inline-block;
`;

export const Type = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  padding-right: 10px;
`;

export const SocialLink = styled.a`
  display: inline-block;
  color: #fff;
  font-size: 1.6rem;
  margin-right: 20px;
  margin-top: 10px;
  transition: translateY 0.5s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const InternalLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  text-decoration: none;
  transition: padding-left 0.5s ease, border 0.5s ease;

  &:hover {
    padding-left: 10px;
    border-left: #49a2de 4px solid;
  }
`;

export const ExternalLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  text-decoration: none;
  transition: padding-left 0.5s ease, border 0.5s ease;

  &:hover {
    padding-left: 10px;
    border-left: #49a2de 4px solid;
  }
`;

export const Value = styled.p`
  color: #ddd;
  font-size: 1.2rem;
  display: inline-block;
`;

export const Logo = styled.img`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LogoMobile = styled.div`
  display: none;
  text-align: center;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const LogoMobileImage = styled.img`
  height: 80px;
`;