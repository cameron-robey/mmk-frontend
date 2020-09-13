import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #d4ebfb;
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

export const Achievements = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding-bottom: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SectionTitle = styled.p`
  margin: 10px 0;

  font-size: 1rem;
  color: #49a2de;
  font-weight: 900;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 900;
`;

export const AchievementWrapper = styled.div`
  width: 25%;
  text-align: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const AchievementNumber = styled.p`
  font-weight: 900;
  letter-spacing: 3px;

  font-size: 4em;
`;

export const AchievementText = styled.p`
  font-size: 1.4em;
  font-weight: 900;
  color: #666;
`;