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
import { useRouteMatch } from 'react-router-dom';
import Content404 from '../components/404/Content404';

const NewsArticle = () => {
  const urlProps = useRouteMatch();
  const news = useNews();

  const [displayData, setDisplayData] = useState(undefined);
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    // Get data on page load
    news.getData();
  }, []);

  useEffect(() => {
    setDisplayData(news.data);

    if (news?.data?.news?.length > 0) {
      setArticle(news.data.news.filter(a => String(a.id) === String(urlProps.params.id))[0]);
    }
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

        { article ? <>
        <PageStyles.SectionTitle>Published on {article.date}</PageStyles.SectionTitle>
        <PageStyles.Title>{article.title}</PageStyles.Title>
        <PageStyles.InlineBreak />
        <PageStyles.OverflowWrapper>
          <PageStyles.BackgroundWrapper background={'#eee'}>
            <PageStyles.TextAlignCenterWrapper>
              <PageStyles.FloatingImage right src={serverPath + article.cover.url}/>
            </PageStyles.TextAlignCenterWrapper>
          </PageStyles.BackgroundWrapper>
          <PageStyles.TextBlock>
            <ReactMarkdown source={article.content} />
          </PageStyles.TextBlock>
        </PageStyles.OverflowWrapper>
        <PageStyles.InlineBreak />
        </>
        : <>
          <PageStyles.SectionTitle>404</PageStyles.SectionTitle>
          <PageStyles.Title noUnderline>This article does not exist!</PageStyles.Title>
          <PageStyles.UnstyledLink to={'/news'}><PageStyles.Subheading noMarginTop>View all articles</PageStyles.Subheading></PageStyles.UnstyledLink>
        </> }

      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default NewsArticle;
