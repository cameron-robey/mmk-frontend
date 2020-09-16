import React from 'react';
import Marquee from 'react-double-marquee';

import { serverPath } from './../../api/config';

import * as styles from './styles/SliderStyles';

const Slider = ({data, ...props}) => {

  if (data.length === 0) return null;

  return <>
    <Marquee direction={"left"} speed={0.06} delay={0}>
      {
        data.map( (o, index) => <React.Fragment key={index}>
          <styles.Image src={serverPath + (o.logo.formats ? o.logo.formats.thumbnail.url : o.logo.url)} />
        </React.Fragment> )
      }
    </Marquee>
  </>
}

export default Slider;