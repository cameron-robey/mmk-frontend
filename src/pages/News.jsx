// Modules
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Contexts
import { serverPath } from './../api/config';
import { useNews } from './../contexts/data/NewsContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const About = () => {
  const news = useNews();

  const [displayData, setDisplayData] = useState(undefined);

  useEffect(() => {
    // Get data on page load
    news.getData();
  }, []);

  useEffect(() => {
    setDisplayData(news.data);
  }, [news.data]);

  if (!displayData || Object.keys(displayData).length === 0) return <>
    <PageTitle title={'About'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'News'} />
    <NavbarFiller />

    <PageStyles.Content>
      <PageStyles.OverflowWrapper>
        <PageStyles.SectionTitle>Blog</PageStyles.SectionTitle>
        <PageStyles.Title>{displayData?.title}</PageStyles.Title>

        {displayData?.news.map( (n,index) => <React.Fragment key={index}>
          <PageStyles.InlineBreak />
          <PageStyles.OverflowWrapper>
            <PageStyles.Subheading accent small noMarginTop>Published on {n.date}</PageStyles.Subheading>
            <PageStyles.Title noUnderline>{n.title}</PageStyles.Title>
            <PageStyles.BackgroundWrapper background={'#eee'}>
              <PageStyles.TextAlignCenterWrapper>
                <PageStyles.FloatingImage right src={serverPath + n.cover.url}/>
              </PageStyles.TextAlignCenterWrapper>
            </PageStyles.BackgroundWrapper>
            <PageStyles.TextBlock>
              <ReactMarkdown source={n.content} />
            </PageStyles.TextBlock>
          </PageStyles.OverflowWrapper>
          <PageStyles.InlineBreak />
          {(index + 1) === displayData.news.length ? null : <PageStyles.Divider />}
        </React.Fragment>)}

      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default About;
