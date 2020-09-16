import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Contexts
import { serverPath } from './../../api/config';

// Styles
import * as styles from './styles/IntroductionStyles';
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

const Introduction = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);
  useEffect(() => {
    setDisplayData(data);
  }, [data]);


  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.IntroductionWrapper>

        <styles.SectionTitle>Introduction</styles.SectionTitle>

        <styles.Introduction>
          <styles.IntroductionInformation>
            <styles.Title>{displayData?.introduction_title}</styles.Title>
            <styles.IntroductionText><ReactMarkdown source={displayData?.introduction_text}/></styles.IntroductionText>
            <styles.IntroductionContactButton onClick={() => window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: 'smooth'})}>Get in touch</styles.IntroductionContactButton>

            <PageStyles.Break />

            <styles.SectionTitle>Latest news</styles.SectionTitle>

            <PageStyles.FlexWrapper>

            {displayData?.news?.slice(0,4).map( (n,index) => <React.Fragment key={index}>
              { index === 0 ? <SmallArticle data={n}/> :
              <PageStyles.HideMobileWrapper>
                <SmallArticle data={n}/>
                <PageStyles.Break mobileOnly /> 
              </PageStyles.HideMobileWrapper>
              }
            </React.Fragment>
            )}

            </PageStyles.FlexWrapper>
          
          </styles.IntroductionInformation>
        </styles.Introduction>
      </styles.IntroductionWrapper>
    </styles.MainWrapper>
  </>
}

export default Introduction;