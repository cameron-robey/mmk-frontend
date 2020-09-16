import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  padding-bottom: ${props => props.noUnderline ? '' : '10px'};
  border-bottom: ${props => props.noUnderline ? '' : '2px solid #aaa'};
`;

export const TextBlock = styled.div`
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

export const InlineBlockWrapper = styled.div`
    ${props => props.right ? `
    float: right;
    padding-left: 20px;
  ` : ''}
  ${props => props.left ? `
    float: left;
    padding-right: 20px;
  ` : ''}

  width: 30%;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 10px;
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

  width: 30%;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 10px;
  }
`;

export const HideMobileWrapper = styled.div`
  display: block;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileOnlyWrapper = styled.div`
  display: none;
  
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Break = styled.div`
  height: 50px;
  width: 100%;

  ${props => props.mobileOnly ? 'display: none;' : ''}
  ${props => props.hideMobile ? 'display: block;' : ''}
  
  @media (max-width: 900px) {
    ${props => props.mobileOnly ? 'display: block;' : ''}
    ${props => props.hideMobile ? 'display: none;' : ''}
  }
`;

export const InlineBreak = styled.div`
  height: 20px;
  width: 100%;

  ${props => props.mobileOnly ? 'display: none;' : ''}
  ${props => props.mobileOnly ? 'display: none;' : ''}
  
  @media (max-width: 900px) {
    ${props => props.mobileOnly ? 'display: block;' : ''}
    ${props => props.hideMobile ? 'display: none;' : ''}
  }
`;

export const OverflowWrapper = styled.div`
  overflow: hidden;
  
  ${props => props.noWrap ? 'white-space: nowrap;' : ''}
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props => props.center ? 'justify-content: center;' : ''}

  @media (max-width: 900px) {
    ${props => props.reverseMobile ? 'flex-direction: column-reverse;' : 'display: block;'}
  }
`;

export const BackgroundWrapper = styled.div`
  ${props => props.background ? `background-color: ${props.background};` : ''}

  ${props => props.fullHeight ? 'height: 100%;' : ''}

  ${props => props.centerVertical ? `
    display: flex;
    align-items: center;
    justify-content: center;
  ` : ''}

  ${props => props.animated ? `
    transition: background 0.5s ease;
  ` : ''}
`;

export const PaddingWrapper = styled.div`
  padding: ${props => props.value ? props.value : '20px'};

  ${props => props.fullHeight ? 'height: 100%;' : ''}
`;

export const FlexDiv = styled.div`
  width: ${props => props.width};
  
  ${props => props.padded ? 'padding: 20px;' : ''}
  
  @media (max-width: 900px) {
    width: 100%;
    ${props => props.noPaddedMobile ? 'padding: 0px;' : ''}
    padding-bottom: 10px;
  }
`;

export const Subheading = styled.p`
  font-size: ${props => props.small ? '1rem' : props.large ? '1.6rem' : props.tiny ? '0.9rem' : '1.2rem'};
  font-weight: 900;
  color: ${props => props.accent ? '#49a2de' : '#444'};
  ${props => props.padded ? 'padding: 0 20px;' : ''}
  padding-top: ${props => (props.noMarginTop) ? '' : '20px'};;
`;

export const Description = styled.p`
  text-decoration: none;
  color: #000;

  ${props => props.mobileOnly ? 'display: none;' : ''}
  
  @media (max-width: 900px) {
    ${props => props.mobileOnly ? 'display: block;' : ''}
  }
`;

export const WideImage = styled.img`
  width: 100%;

  ${props => props.padded ? `
    padding: ${props.padded};
  ` : ''}
`;

export const FloatingImage = styled.img`
  max-height: 400px;
  max-width: 100%;
  margin: auto;
  padding: 15px;
`;

export const TextAlignCenterWrapper = styled.div`
  text-align: center;
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const UnstyledLinkA = styled.a`
  text-decoration: none;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #aaa;
`;

export const AccentButton = styled.a`
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

export const AspectRatioContainer = styled.div`
  height: 0px;
  width: 100%;
  padding-top: calc(100% * ${props => props.ratio});

  background-image: url(${props => props.url});
  background-size: cover;
`;

export const Tag = styled.div`
  display: inline-block;
  background: ${props => props.tagColor};
  padding: 5px 10px;
  margin: 10px 0px;
  margin-right: 10px;
  border-radius: 5px;
  font-weight: 700;
  color: #fff;
  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 900px) {
    margin: 5px 0px;
    margin-right: 10px;
  }

`;

export const TagGroup = styled.div`
  
`;

export const FullHeight = styled.div`
  height: 100%;
`;

export const LargeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 5px 0;
  color: #49a2de;
`;

export const CursorWrapper = styled.div`
  cursor: pointer;
`;

export const ContactBlock = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #444;

  & > svg {
    margin-right: 10px;
  }

  & > span {
    font-weight: 400;
    color: #000;
  }

`;