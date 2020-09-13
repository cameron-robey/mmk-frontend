import styled from 'styled-components';

export const MainWrapper = styled.div``;

export const IntroductionWrapper = styled.div`
  width: 60%;
  margin: 100px auto;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 90%;
    margin: 50px auto;
  }
`;

export const IntroductionInformation = styled.div`
  width: 70%;
  display: inline-block;

  @media (max-width: 900px) {
    display: block;
    width: 100%;
  }
`;

export const Introduction = styled.div`
  display: flex;
`;

export const IntroductionImage = styled.div`
  width: 30%;
  display: inline-block;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SectionTitle = styled.p`
  font-weight: 900;
  font-size: 1rem;
  color: #49a2de;
  margin: 10px 0;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const IntroductionText = styled.div`
  font-size: 1rem;
  color: #555;

  & > * {
    margin: 10px 0;
  }

  & > ol {
    list-style-position: inside;
  }
  & > ol > li:before {
    content: "";
    display: inline-block;
    width: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const IntroductionContactButton = styled.a`
  margin-top: 20px;
  padding: 10px;
  
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;

  background: #49a2de;
  border-bottom: 3px solid #2a81bb;
  box-shadow: 0px 3px 3px rgba(73,73,73,0.20);

  &:hover {
        box-shadow: 0px 3px 7px rgba(73,73,73,0.4);
        transform: translateY(-1px);
    }
`;