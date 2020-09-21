import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Contexts
import { serverPath } from './../../api/config';

// Styles
import * as styles from './styles/NewsStyles';
import * as PageStyles from './../../pages/styles/PageStyles';


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
        </PageStyles.UnstyledLink>
          <PageStyles.MobileOnlyWrapper>
            <PageStyles.Description>
              {data.content.substring(0,200).split(' ').slice(0, -1).join(' ')}...
            </PageStyles.Description>
            <PageStyles.AccentButtonLink to={`/news/${data.id}/${data.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/\s/g,'-')}`}>Read more</PageStyles.AccentButtonLink>      
          </PageStyles.MobileOnlyWrapper>
      </PageStyles.PaddingWrapper>
    </PageStyles.FlexDiv>
  </>
}

const News = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);
  useEffect(() => {
    setDisplayData(data);
  }, [data]);


  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.NewsWrapper>

        <PageStyles.SectionTitle>Latest news</PageStyles.SectionTitle>
        <PageStyles.Title>Latest news from MMK Public Speaking</PageStyles.Title>

        <styles.News>
          <styles.IntroductionInformation>
            
            <PageStyles.MobileOnlyWrapper>
              {displayData?.news?.slice(0,1).map( (n,index) => <React.Fragment key={index}>
                <SmallArticle data={n}/>
              </React.Fragment>
              )}
            </PageStyles.MobileOnlyWrapper>


            <PageStyles.HideMobileWrapper>
              <PageStyles.FlexWrapper>
              {displayData?.news?.slice(0,4).map( (n,index) => <React.Fragment key={index}>
                <SmallArticle data={n}/>
              </React.Fragment>
              )}
              </PageStyles.FlexWrapper>
            </PageStyles.HideMobileWrapper>

          
          </styles.IntroductionInformation>
        </styles.News>
      </styles.NewsWrapper>
    </styles.MainWrapper>
  </>
}

export default News;