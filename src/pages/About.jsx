// Modules
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
// Contexts
import { serverPath } from './../api/config';
import { useAboutUs } from './../contexts/data/AboutUsContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const About = () => {
  const aboutUs = useAboutUs();

  const [displayData, setDisplayData] = useState(undefined);

  useEffect(() => {
    // Get data on page load
    aboutUs.getData();
  }, []);

  useEffect(() => {
    setDisplayData(aboutUs.data);
  }, [aboutUs.data]);

  if (!displayData || Object.keys(displayData).length === 0) return <>
    <PageTitle title={'About'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'About'} />
    <NavbarFiller />

    <PageStyles.Content>
      <PageStyles.OverflowWrapper>
        <PageStyles.SectionTitle>About the Organisation</PageStyles.SectionTitle>
        <PageStyles.Title>{displayData?.company_subtitle}</PageStyles.Title>

        <PageStyles.TextBlock>
          <PageStyles.InlineImage left src={serverPath + displayData?.company_image?.formats.small.url}/>
          <ReactMarkdown source={displayData?.company_text} />
        </PageStyles.TextBlock>
      </PageStyles.OverflowWrapper>
      <PageStyles.Break />

      <PageStyles.OverflowWrapper>
      <PageStyles.SectionTitle>About the Founder</PageStyles.SectionTitle>
      <PageStyles.Title>{displayData?.founder_subtitle}</PageStyles.Title>

      <PageStyles.TextBlock>
        <PageStyles.InlineImage right src={serverPath + displayData?.founder_image?.formats.small.url}/>
        <ReactMarkdown source={displayData?.founder_text} />
      </PageStyles.TextBlock>
      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default About;
