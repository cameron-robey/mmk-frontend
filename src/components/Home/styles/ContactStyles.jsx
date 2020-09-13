import styled from 'styled-components';

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

export const ContactItem = styled.div`
  margin: 10px 0;
`;

export const Type = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  padding-right: 10px;
`;

export const Value = styled.p`
  color: #ddd;
  font-size: 1.2rem;
  display: inline-block;

`;