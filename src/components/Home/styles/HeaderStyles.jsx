import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundImage = styled.div`
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  z-index: -1;
  filter: blur(7px);
  transform: scale(1.05);
`;

export const Header = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  
  color: #fff;
  overflow: hidden;
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
  width: 100%;
  
  padding-top: 30px;
`;

export const Scroll = styled.p`
  color: #fff;
  cursor: pointer;
  cursor: hand;
  padding-top: 30px;
`;

export const Button = styled(Link)`
  color: #fff;
  /* color: #333;
  background: #fff; */
  border: 4px solid #fff;
  padding: 10px;
  border-radius: 5px;

  text-decoration: none;
  font-weight: 800;
  font-size: 1.4rem;
  margin: 10px;
`;