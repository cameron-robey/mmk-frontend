import styled from 'styled-components';

export const Content = styled.div`
  min-height: calc(100vh - 51px);
  width: 60%;
  margin: auto;

  padding: 50px 0;

  @media (max-width: 1200px) {
    width: 80%;
  }
  
  @media (max-width: 900px) {
    width: 90%;
  }
  
`;

export const SectionTitle = styled.p`
  margin: 10px 0;

  font-size: 1rem;
  font-weight: 900;
  color: #49a2de;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 900;

  padding-bottom: 10px;
  border-bottom: 2px solid #aaa;
`;

export const TextBlock = styled.div`
  & > * {
    margin: 10px 0;
  }
`;

export const InlineImage = styled.img`
  ${props => props.right ? `
    float: right;
    padding-left: 20px;
  ` : ''}
  ${props => props.left ? `
    float: left;
    padding-right: 20px;
  ` : ''}

  width: 40%;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 10px;
  }
`;

export const Break = styled.div`
  height: 50px;
  width: 100%;
`;
