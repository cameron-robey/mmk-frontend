import React from 'react';

// Components
import NavbarFiller from './../Helpers/NavbarFiller';
import PageTitle from './../Helpers/PageTitle';

// Styles
import * as PageStyles from './../../pages/styles/PageStyles';

const Content404 = () => {
  return <>
    <PageTitle title={'Page not found'} />
    <NavbarFiller />
    <PageStyles.Content>
      <PageStyles.SectionTitle>Error 404</PageStyles.SectionTitle>
      <PageStyles.Title noUnderline>This page does not exist!</PageStyles.Title>
      <PageStyles.UnstyledLink to={'/'}><PageStyles.Subheading noMarginTop>Take me to an actual page</PageStyles.Subheading></PageStyles.UnstyledLink>
    </PageStyles.Content>
  </>
}

export default Content404;