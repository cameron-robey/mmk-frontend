import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #eee;
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

export const SectionTitle = styled.p`
  margin: 10px 0;

  font-size: 1rem;
  font-weight: 900;
  color: #49a2de;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 900;
`;

export const AwardsSlider = styled.div`
  padding: 30px 0;

  & > div > button {
    &:before {
      color: #333;
    }
  }
`;

export const Award = styled.div`
  text-align: center;
  padding: 20px;
`;

export const AwardWrapper = styled.div``;

export const AwardImage = styled.img`
  margin: auto;
  height: 150px;
`;

export const AwardName = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const AwardText = styled.p`

`;
