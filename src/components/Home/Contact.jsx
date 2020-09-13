import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';
import {} from '@fortawesome/free-brands-svg-icons';

// Contexts
import { serverPath } from '../../api/config';

// Styles
import * as styles from './styles/ContactStyles';

const Awards = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);
  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.ContentWrapper>
        <styles.SectionTitle>Contact</styles.SectionTitle>

        <styles.Title>{displayData?.contact_title}</styles.Title>

        <styles.ContactItem>
          <styles.Type><FontAwesomeIcon icon={ faEnvelope } />&nbsp;&nbsp;Email</styles.Type>
          <styles.Value>{displayData?.contact?.email}</styles.Value>
        </styles.ContactItem>
        
        <styles.ContactItem>
          <styles.Type><FontAwesomeIcon icon={ faPhone } />&nbsp;&nbsp;Phone</styles.Type>
          <styles.Value>{displayData?.contact?.phone}</styles.Value>
        </styles.ContactItem>

      </styles.ContentWrapper>
    </styles.MainWrapper>
  </>
}

export default Awards;