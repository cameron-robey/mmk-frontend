import styled from 'styled-components';

export const MainWrapper = styled.div`
  
`;

export const NewsWrapper = styled.div`
  width: 60%;
  margin: auto;
  padding: 100px 0;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 90%;
    margin: 50px auto;
  }
`;

export const IntroductionInformation = styled.div`
  width: 100%;
  display: inline-block;

  @media (max-width: 900px) {
    display: block;
    width: 100%;
  }
`;

export const News = styled.div`
  display: flex;
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