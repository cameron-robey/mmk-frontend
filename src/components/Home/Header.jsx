import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';

// Contexts
import { serverPath } from './../../api/config';

// Styles
import * as styles from './styles/HeaderStyles';

const Header = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);

  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  if (displayData === undefined) return null;

  return <>
    <styles.Header backgroundUrl={serverPath + displayData.header_background?.url} >
      <styles.BackgroundImage backgroundUrl={serverPath + displayData.header_background?.url} />
      <styles.Content>
        <styles.Logo src={ serverPath + displayData.header_logo?.formats.medium.url } alt="" />
        <styles.Title>{ displayData.header_title }</styles.Title>
        <styles.Subtitle>{ displayData.header_subtitle }</styles.Subtitle>

        <styles.Navigation>
          <styles.Button to={'/courses'}>Courses</styles.Button>
          <styles.Button to={'/organisations'}>Organisations</styles.Button>
          <styles.Scroll onClick={() => window.scroll({top: window.innerHeight - 51, left: 0, behavior: 'smooth'}) } >
            <FontAwesomeIcon icon={faAngleDown} size="2x" />
          </styles.Scroll>
        </styles.Navigation>
      </styles.Content>
    </styles.Header>
  
  </>
}

export default Header;