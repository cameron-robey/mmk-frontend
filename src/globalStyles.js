import styled from 'styled-components';

const Title = styled.h1`
    text-align: ${props => props.center ?  'center' : 'justified'};
    margin-bottom: 0px;
    margin-top: ${props => props.nomargintop ?  '0' : ''};
    padding-left: 0px;
    font-family: 'Lato', sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
`;

const Subtitle = styled.p`
    text-align: center;
`;

const ContentWrapper = styled.div`
    padding: 10px;
`;


export {
    Title,
    Subtitle,
    ContentWrapper
};
