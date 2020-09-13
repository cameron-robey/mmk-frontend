import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Contexts
import { serverPath } from './../../api/config';

// Styles
import * as styles from './styles/IntroductionStyles';

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
          </styles.IntroductionInformation>

          <styles.IntroductionImage>
            <styles.Image src={serverPath + displayData?.introduction_image?.formats.small.url} />
          </styles.IntroductionImage>

        </styles.Introduction>
      </styles.IntroductionWrapper>
    </styles.MainWrapper>
  </>
}

export default Introduction;