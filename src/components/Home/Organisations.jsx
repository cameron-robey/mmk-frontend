import React, { useState, useEffect } from 'react';

// Contexts
import { serverPath } from '../../api/config';

// Components
import Slider from './../../components/Organisations/Slider';

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

        <Slider data={displayData?.organisations} />
      </styles.ContentWrapper>
    </styles.MainWrapper>
  </>
}

export default CustomerTestimonials;