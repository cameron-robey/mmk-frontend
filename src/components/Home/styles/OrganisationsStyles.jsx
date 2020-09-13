import styled from 'styled-components';

export const MainWrapper = styled.div`
`;

export const ContentWrapper = styled.div`
  width: 60%;
  margin: auto;
  padding: 100px 0;
  overflow: hidden;
  white-space: nowrap;

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

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  height: 100px;
  margin: 30px;
  display: inline-block;
`;