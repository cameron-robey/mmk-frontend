import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/fontawesome-free-solid';

// Contexts
import { serverPath } from '../../api/config';

// Styles
import * as styles from './styles/CustomerTestimonialsStyles';

const CustomerTestimonials = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);
  useEffect(() => {
    setDisplayData(data);
    console.log(data);
  }, [data]);


  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.ContentWrapper>
        <styles.SectionTitle>Testimonials</styles.SectionTitle>

        <styles.Title>{displayData?.testimonials_title}</styles.Title>
        {
          displayData.testimonials?.map( (d, index) => <styles.Testimonial key={index}>
            <styles.Date>{d.date}</styles.Date>
            <styles.TestimonialContent>
              <styles.Text><FontAwesomeIcon icon={faQuoteLeft} />{d.testimonial}</styles.Text>
              <styles.Name>{d.name}</styles.Name>
              <styles.Role>{d.role}</styles.Role>
            </styles.TestimonialContent>
          </styles.Testimonial> )
        }
      </styles.ContentWrapper>
    </styles.MainWrapper>
  </>
}

export default CustomerTestimonials;