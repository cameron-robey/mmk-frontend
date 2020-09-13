import styled from 'styled-components';

export const MainWrapper = styled.div`

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

export const Testimonial = styled.div`
  margin: 40px 0;
`;

export const Date = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 900;
`;

export const Name = styled.p`
  font-size: 1.1rem;
  color: #000;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  margin: 10px 0;

  & > svg {
    margin-right: 10px;
    color: #888;
  }
`;

export const Role = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 700;
`;

export const TestimonialContent = styled.div`
  border-left: 4px #49a2de solid;
  padding-left: 10px;
`;
