// Modules
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { faSchool, faHandHoldingHeart, faBriefcase, faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Contexts
import { serverPath } from './../api/config';
import { useOrganisationsPage } from './../contexts/data/OrganisationsPageContext';
import { useFooter } from '../contexts/data/FooterContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const About = () => {
  const organisationsPage = useOrganisationsPage();
  const footer = useFooter();

  const [displayData, setDisplayData] = useState(undefined);
  const [footerData, setFooterData] = useState(undefined);

  const [view, setView] = useState('');

  useEffect(() => {
    // Get data on page load
    organisationsPage.getData();
    footer.getData();
  }, []);

  useEffect(() => {
    setDisplayData(organisationsPage.data);
  }, [organisationsPage.data]);

  useEffect(() => {
    setFooterData(footer.data);
  }, [footer.data]);

  if (!displayData || Object.keys(displayData).length === 0) return <>
    <PageTitle title={'Organisations'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'Organisations'} />
    <NavbarFiller />
    
    <PageStyles.Content>
      
      <PageStyles.FlexWrapper>
        <PageStyles.FlexDiv width={'calc(100% / 3)'}>
          <PageStyles.PaddingWrapper value={'5px'}>
            <PageStyles.CursorWrapper onClick={() => setView('schools')}>
              <PageStyles.BackgroundWrapper background={ view === 'schools' ? '#ddd' : '#eee'} animated>
                <PageStyles.TextAlignCenterWrapper>
                  <PageStyles.PaddingWrapper value={'20px'}>
                    <PageStyles.LargeIcon icon={ faSchool } />
                    <PageStyles.Subheading noMarginTop large>Schools</PageStyles.Subheading>
                  </PageStyles.PaddingWrapper>
                </PageStyles.TextAlignCenterWrapper>
              </PageStyles.BackgroundWrapper>
            </PageStyles.CursorWrapper>
          </PageStyles.PaddingWrapper>
        </PageStyles.FlexDiv>

        <PageStyles.FlexDiv width={'calc(100% / 3)'}>
          <PageStyles.PaddingWrapper value={'5px'}>
            <PageStyles.CursorWrapper onClick={() => setView('charities')}>
              <PageStyles.BackgroundWrapper background={ view === 'charities' ? '#ddd' : '#eee'} animated>
                <PageStyles.TextAlignCenterWrapper>
                  <PageStyles.PaddingWrapper value={'20px'}>
                    <PageStyles.LargeIcon icon={ faHandHoldingHeart } />
                    <PageStyles.Subheading noMarginTop large>Charities</PageStyles.Subheading>
                  </PageStyles.PaddingWrapper>
                </PageStyles.TextAlignCenterWrapper>
              </PageStyles.BackgroundWrapper>
            </PageStyles.CursorWrapper>
          </PageStyles.PaddingWrapper>
        </PageStyles.FlexDiv>

        <PageStyles.FlexDiv width={'calc(100% / 3)'}>
          <PageStyles.PaddingWrapper value={'5px'}>
            <PageStyles.CursorWrapper onClick={() => setView('businesses')}>
              <PageStyles.BackgroundWrapper background={ view === 'businesses' ? '#ddd' : '#eee'} animated>
                <PageStyles.TextAlignCenterWrapper>
                  <PageStyles.PaddingWrapper value={'20px'}>
                    <PageStyles.LargeIcon icon={ faBriefcase } />
                    <PageStyles.Subheading noMarginTop large>Businesses</PageStyles.Subheading>
                  </PageStyles.PaddingWrapper>
                </PageStyles.TextAlignCenterWrapper>
              </PageStyles.BackgroundWrapper>
            </PageStyles.CursorWrapper>
          </PageStyles.PaddingWrapper>
        </PageStyles.FlexDiv>

      </PageStyles.FlexWrapper>
        
      { view === 'schools' ? 
        <PageStyles.OverflowWrapper>
          <PageStyles.SectionTitle>Schools</PageStyles.SectionTitle>
          <PageStyles.Title>{displayData?.schools?.title}</PageStyles.Title>

          <PageStyles.TextBlock>
            <ReactMarkdown source={displayData?.schools?.content} />
          </PageStyles.TextBlock>
        </PageStyles.OverflowWrapper>
      : null }

      { view === 'charities' ? 
        <PageStyles.OverflowWrapper>
          <PageStyles.SectionTitle>Charities</PageStyles.SectionTitle>
          <PageStyles.Title>{displayData?.charities?.title}</PageStyles.Title>

          <PageStyles.TextBlock>
            <ReactMarkdown source={displayData?.charities?.content} />
          </PageStyles.TextBlock>
        </PageStyles.OverflowWrapper>
      : null }

      { view === 'businesses' ? 
        <PageStyles.OverflowWrapper>
          <PageStyles.SectionTitle>Businesses</PageStyles.SectionTitle>
          <PageStyles.Title>{displayData?.businesses?.title}</PageStyles.Title>

          <PageStyles.TextBlock>
            <ReactMarkdown source={displayData?.businesses?.content} />
          </PageStyles.TextBlock>
        </PageStyles.OverflowWrapper>
      : null }

      { view === '' ? 
        <PageStyles.OverflowWrapper>
          <PageStyles.SectionTitle>Organisations</PageStyles.SectionTitle>
          <PageStyles.Title>{displayData?.initial_title}</PageStyles.Title>

          <PageStyles.TextBlock>{displayData?.initial_content}</PageStyles.TextBlock>
        </PageStyles.OverflowWrapper>
      : null }

      <PageStyles.Break />

      <PageStyles.OverflowWrapper>
        <PageStyles.SectionTitle>Contact</PageStyles.SectionTitle>
        <PageStyles.Title>Get in contact</PageStyles.Title>

        <PageStyles.TextBlock>
          <PageStyles.UnstyledLinkA href={`mailto:${footerData?.contact?.email}`}>
            <PageStyles.ContactBlock>
              <FontAwesomeIcon icon={faEnvelope} />Email: <span>{footerData?.contact?.email}</span>
            </PageStyles.ContactBlock>
          </PageStyles.UnstyledLinkA>
          <PageStyles.UnstyledLinkA href={`tel:${footerData?.contact?.phone.split(' ').join('')}`}>
            <PageStyles.ContactBlock>
              <FontAwesomeIcon icon={faPhone} />Phone: <span>{footerData?.contact?.phone}</span>
            </PageStyles.ContactBlock>
          </PageStyles.UnstyledLinkA>
        </PageStyles.TextBlock>
      </PageStyles.OverflowWrapper>
      
      <PageStyles.Break />
      
    </PageStyles.Content>
    
  </>
}

export default About;
