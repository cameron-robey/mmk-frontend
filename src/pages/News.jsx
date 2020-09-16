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

const FeatureArticle = ({data, ...props}) => {
  return <>
    <PageStyles.OverflowWrapper>
      <PageStyles.UnstyledLink to={`/news/${data.id}/${data.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/\s/g,'-')}`}>
      <PageStyles.Subheading accent small noMarginTop>Published on {data.date}</PageStyles.Subheading>
      <PageStyles.Title noUnderline>{data.title}</PageStyles.Title>
      <PageStyles.BackgroundWrapper background={'#eee'}>
        <PageStyles.TextAlignCenterWrapper>
          <PageStyles.FloatingImage right src={serverPath + data.cover.url}/>
        </PageStyles.TextAlignCenterWrapper>
      </PageStyles.BackgroundWrapper>
      </PageStyles.UnstyledLink>
      <PageStyles.TextBlock>
        <ReactMarkdown source={data.content} />
      </PageStyles.TextBlock>
    </PageStyles.OverflowWrapper>
  </>
}

const SmallArticle = ({data, ...props}) => {
  return <>
    <PageStyles.FlexDiv width={'25%'}>
      <PageStyles.PaddingWrapper value={'5px'}>
        <PageStyles.UnstyledLink to={`/news/${data.id}/${data.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/\s/g,'-')}`}>
          <PageStyles.BackgroundWrapper background={'#eee'} >
            <PageStyles.PaddingWrapper value={'5px'}>
              <PageStyles.AspectRatioContainer ratio="0.66" contain url={serverPath + (data.cover.url)}/>
            </PageStyles.PaddingWrapper>
          </PageStyles.BackgroundWrapper>
          <PageStyles.InlineBreak />
          <PageStyles.Subheading tiny noMarginTop>{data.date}</PageStyles.Subheading>
          <PageStyles.Subheading small accent noMarginTop>{data.title}</PageStyles.Subheading>
          <PageStyles.MobileOnlyWrapper>
            <PageStyles.Description>
              {data.content.substring(0,200).split(' ').slice(0, -1).join(' ')}...
            </PageStyles.Description>
            <PageStyles.AccentButton href={data.url} target="_blank">Read more</PageStyles.AccentButton>      
          </PageStyles.MobileOnlyWrapper>
        </PageStyles.UnstyledLink>
      </PageStyles.PaddingWrapper>
    </PageStyles.FlexDiv>
  </>
}

const News = () => {
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
    <PageTitle title={'News'} />
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

        <PageStyles.FlexWrapper>

          {displayData?.news.map( (n,index) => <React.Fragment key={index}>
            
            { index === 0 ? <>
              <PageStyles.InlineBreak />
                <FeatureArticle data={n} />
              <PageStyles.InlineBreak />
              <PageStyles.Divider />
              <PageStyles.InlineBreak />
            </> : <>
              <SmallArticle data={n}/>
              { (index % 4 === 0) ? <PageStyles.InlineBreak hideMobile/> : null}
              <PageStyles.Break mobileOnly />
            </> }
          
          </React.Fragment>)}

        </PageStyles.FlexWrapper>

      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default News;
