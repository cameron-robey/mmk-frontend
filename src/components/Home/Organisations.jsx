import React, { useState, useEffect } from 'react';
import Marquee, { Motion } from 'react-marquee-slider';

// Contexts
import { serverPath } from '../../api/config';

// Styles
import * as styles from './styles/OrganisationsStyles';

const CustomerTestimonials = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);
  useEffect(() => {
    setDisplayData(data);
  }, [data]);


  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.ContentWrapper>
        <styles.SectionTitle>Organisations</styles.SectionTitle>

        <styles.Title>{displayData?.organisations_title}</styles.Title>

        <Marquee velocity={12}>
            {
              displayData.organisations?.map( (o, index) => <>
                <styles.Image src={serverPath + (o.logo.formats ? o.logo.formats.thumbnail.url : o.logo.url)} />
              </> )
            }
        </Marquee>
      </styles.ContentWrapper>
    </styles.MainWrapper>
  </>
}

export default CustomerTestimonials;