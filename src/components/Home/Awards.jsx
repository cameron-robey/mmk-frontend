import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Helmet from 'react-helmet';

// Contexts
import { serverPath } from '../../api/config';

// Styles
import * as styles from './styles/AwardsStyles';

const Awards = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);
  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  const sliderSettings = {
    dots: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  if (displayData === undefined) return null;

  return <>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>

    <styles.MainWrapper>
      <styles.ContentWrapper>
        <styles.SectionTitle>Awards</styles.SectionTitle>

        <styles.Title>{displayData?.awards_title}</styles.Title>

        <styles.AwardsSlider>
          <Slider {...sliderSettings}>

            {
              displayData.awards?.map( (a, index) => <styles.Award>
                <styles.AwardImage src={serverPath + (a.image.formats ? a.image.formats.thumbnail.url : a.image.url)} />
                <styles.AwardName>{a.name}</styles.AwardName>
                <styles.AwardText>{a.description}</styles.AwardText>
              </styles.Award> )
            }

          </Slider>
        </styles.AwardsSlider>

      </styles.ContentWrapper>
    </styles.MainWrapper>
  </>
}

export default Awards;