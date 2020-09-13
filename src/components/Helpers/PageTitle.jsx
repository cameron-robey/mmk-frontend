import React, { FunctionComponent } from 'react';
import {Helmet} from "react-helmet";


const PageTitle = ({title, ...rest}) => {
  return <>
    <Helmet>
      <title>{`${title ? `${title} - ` : `` }MMK Public Speaking`}</title>
    </Helmet>
  </>
}

export default PageTitle;