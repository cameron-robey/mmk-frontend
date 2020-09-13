import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
`;

export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 5px;
  font-size: 45px;
  margin-bottom: 0px;
  text-shadow: 0 0 16px #42a7f4;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  letter-spacing: 3px;
  margin-top: 10px;
  text-shadow: 0 0 16px #42a7f4;
`;

export const Logo = styled.img`
  max-height: 35vh;
  max-width: 80vw;
`;

export const Content = styled.div`
  position: absolute;
  top: 25%;
  height: 50%;
  width: 100%;
`;

export const Navigation = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10%;
`;

export const Scroll = styled.p`
  color: #fff;
  cursor: pointer;
  cursor: hand;
`;

export const Button = styled(Link)`
  color: #fff;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 5px;

  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 10px;
`;