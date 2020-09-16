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

const LargeBlogPost = ({data, ...props}) => {
  return <>
    <PageStyles.FlexDiv width={'100%'}>
      <PageStyles.OverflowWrapper>
        <PageStyles.InlineBlockWrapper right>
          <PageStyles.AspectRatioContainer ratio="0.66" url={serverPath + (data.cover.url)}/>
        </PageStyles.InlineBlockWrapper>
        <PageStyles.Subheading small noMarginTop>Featured article</PageStyles.Subheading>
        <PageStyles.Subheading accent noMarginTop>{data.title}</PageStyles.Subheading>
        <PageStyles.Subheading small noMarginTop>Published on {data.source.name}</PageStyles.Subheading>
        <PageStyles.Description>
          {data.first_paragraph.substring(0,250).split(' ').slice(0, -1).join(' ')}...
        </PageStyles.Description>
        <PageStyles.AccentButton href={data.url} target="_blank">Read more</PageStyles.AccentButton>
      </PageStyles.OverflowWrapper>
    </PageStyles.FlexDiv>
  </>
}

const SmallBlogPost = ({data, ...props}) => {
  return <>
    <PageStyles.FlexDiv width={'25%'}>
      <PageStyles.PaddingWrapper value={'5px'}>
        <PageStyles.UnstyledLinkA href={data.url} target="_blank">
          <PageStyles.AspectRatioContainer ratio="0.66" url={serverPath + (data.cover.url)}/>
          <PageStyles.InlineBreak />
          <PageStyles.Subheading tiny noMarginTop>{data.source.name}</PageStyles.Subheading>
          <PageStyles.Subheading small accent noMarginTop>{data.title}</PageStyles.Subheading>
          <PageStyles.MobileOnlyWrapper>
            <PageStyles.Description>
              {data.first_paragraph.substring(0,200).split(' ').slice(0, -1).join(' ')}...
            </PageStyles.Description>
            <PageStyles.AccentButton href={data.url} target="_blank">Read more</PageStyles.AccentButton>      
          </PageStyles.MobileOnlyWrapper>
        </PageStyles.UnstyledLinkA>
      </PageStyles.PaddingWrapper>
    </PageStyles.FlexDiv>
  </>
}

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
    <PageTitle title={'Blog'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'Blog'} />
    <NavbarFiller />

    <PageStyles.Content>
      <PageStyles.OverflowWrapper>
        <PageStyles.SectionTitle>Blog</PageStyles.SectionTitle>
        <PageStyles.Title>{displayData?.title}</PageStyles.Title>
        <PageStyles.FlexWrapper>

          {displayData?.posts.map( (a,index) => <React.Fragment key={index}>
            
            { index === 0 ? <>
              <PageStyles.InlineBreak />
                <LargeBlogPost data={a} />
              <PageStyles.InlineBreak />
              <PageStyles.Divider />
              <PageStyles.InlineBreak />
            </>
            : <>
              <SmallBlogPost data={a} />
              { (index % 4 === 0) ? <PageStyles.InlineBreak hideMobile/> : null}
              <PageStyles.Break mobileOnly />
            </> }

            
            
          </React.Fragment>)}

        </PageStyles.FlexWrapper>

      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default Blog;
