// Modules
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube-embed'
import GetYouTubeID from 'get-youtube-id';

// Contexts
import { serverPath } from './../api/config';
import { useVideos } from './../contexts/data/VideosContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const Videos = () => {
  const videos = useVideos();

  const [displayData, setDisplayData] = useState(undefined);

  useEffect(() => {
    // Get data on page load
    videos.getData();
  }, []);

  useEffect(() => {
    setDisplayData(videos.data);
  }, [videos.data]);

  if (!displayData || Object.keys(displayData).length === 0) return <>
    <PageTitle title={'Videos'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'Videos'} />
    <NavbarFiller />

    <PageStyles.Content>
      <PageStyles.SectionTitle>Videos</PageStyles.SectionTitle>
      <PageStyles.Title>{displayData?.title}</PageStyles.Title>
      {displayData?.categories?.map((c, index) => <React.Fragment key={index}>
        <PageStyles.FlexWrapper reverseMobile>
          <PageStyles.FlexDiv width={'60%'}>
            <YouTube id={GetYouTubeID(c.featured_video.link)} />
          </PageStyles.FlexDiv>

          <PageStyles.FlexDiv width={'40%'} padded noPaddedMobile>
            <PageStyles.Subheading accent>{c.title}</PageStyles.Subheading>
            <PageStyles.Description>{c.description}</PageStyles.Description>

            <PageStyles.InlineBreak />

            <PageStyles.Subheading>Featured video</PageStyles.Subheading>
            <PageStyles.Description>{c.featured_video.name}</PageStyles.Description>
          </PageStyles.FlexDiv>
        </PageStyles.FlexWrapper>

        

        {c.videos.length > 0 ? <>

        <PageStyles.InlineBreak />
        
        <PageStyles.BackgroundWrapper background={'#eee'}>
          <PageStyles.Subheading accent padded>More Videos</PageStyles.Subheading>
          <PageStyles.FlexWrapper>
            {c.videos.map((v, index) => <React.Fragment key={index}>
              <PageStyles.FlexDiv width={'25%'} padded>
                <a href={v.link} target="_blank">
                  <PageStyles.WideImage src={ serverPath + (v.thumbnail.formats ? v.thumbnail.formats.thumbnail.url : v.thumbnail.url)} />
                </a>
              </PageStyles.FlexDiv>
            </React.Fragment>)}
            
          </PageStyles.FlexWrapper>
        </PageStyles.BackgroundWrapper>
        
        </>: null}
        

        <PageStyles.Break />
        {((index + 1) === displayData.categories.length) ? null : <><PageStyles.Divider /><PageStyles.Break /></>}

      </React.Fragment>)}

      <PageStyles.OverflowWrapper>

      </PageStyles.OverflowWrapper>
      
    </PageStyles.Content>
    
  </>
}

export default Videos;
