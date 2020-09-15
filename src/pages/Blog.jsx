// Modules
import React, { useState, useEffect } from 'react';
import AspectRatio from 'react-aspect-ratio';

// Contexts
import { serverPath } from './../api/config';
import { useBlog } from '../contexts/data/BlogContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const Blog = () => {
  const blog = useBlog();

  const [displayData, setDisplayData] = useState({});

  useEffect(() => {
    // Get data on page load
    blog.getData();
  }, []);

  useEffect(() => {
    setDisplayData(blog.data);
  }, [blog.data]);

  if (!displayData.length && Object.keys(displayData).length === 0) return <>
    <PageTitle title={'About'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'About'} />
    <NavbarFiller />

    <PageStyles.Content>
      <PageStyles.OverflowWrapper>
        <PageStyles.SectionTitle>Blog</PageStyles.SectionTitle>
        <PageStyles.Title>{displayData?.title}</PageStyles.Title>

        {displayData?.posts.map( (a,index) => <React.Fragment key={index}>
          <PageStyles.InlineBreak />
          <PageStyles.OverflowWrapper>
            <PageStyles.InlineBlockWrapper right>
              <PageStyles.AspectRatioContainer ratio="0.66" url={serverPath + (a.cover.url)}/>
            </PageStyles.InlineBlockWrapper>
            <PageStyles.Subheading accent noMarginTop>{a.title}</PageStyles.Subheading>
            <PageStyles.Subheading small noMarginTop>Published on {a.source.name}</PageStyles.Subheading>
            <PageStyles.Description>
              {a.first_paragraph.substring(0,250).split(' ').slice(0, -1).join(' ')}...
            </PageStyles.Description>
            <PageStyles.AccentButton href={a.url} target="_blank">Read more</PageStyles.AccentButton>
          </PageStyles.OverflowWrapper>
          <PageStyles.InlineBreak />
          {(index + 1) === displayData.posts.length ? null : <PageStyles.Divider />}
        </React.Fragment>)}

      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default Blog;
