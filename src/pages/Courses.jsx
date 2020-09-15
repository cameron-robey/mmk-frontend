// Modules
import React, { useState, useEffect } from 'react';
// Contexts
import { serverPath } from './../api/config';
import { useCourses } from './../contexts/data/CoursesContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const About = () => {
  const courses = useCourses();

  const [displayData, setDisplayData] = useState(undefined);

  useEffect(() => {
    // Get data on page load
    courses.getData();
  }, []);

  useEffect(() => {
    setDisplayData(courses.data);
  }, [courses.data]);

  if (!displayData || Object.keys(displayData).length === 0) return <>
    <PageTitle title={'Courses'} />
    <NavbarFiller />
    <PageStyles.Content />
  </>;

  return <>
    <PageTitle title={'Courses'} />
    <NavbarFiller />

    <PageStyles.Content>
      <PageStyles.SectionTitle>Courses</PageStyles.SectionTitle>
      <PageStyles.Title>{displayData?.title}</PageStyles.Title>
      
      {displayData?.courses?.map((c, index) => <React.Fragment key={index}>
        {index === 0 ? <>
          <PageStyles.BackgroundWrapper background={'#d4ebfb'}>
            
            <PageStyles.FlexWrapper>
              <PageStyles.FlexDiv width={'30%'}>
                <PageStyles.PaddingWrapper fullHeight>
                  <PageStyles.BackgroundWrapper fullHeight centerVertical background={'#bfdcf0'}>
                    <PageStyles.WideImage padded={'5px'} src={serverPath + c.cover.url} />
                  </PageStyles.BackgroundWrapper>
                </PageStyles.PaddingWrapper>
              </PageStyles.FlexDiv>
              <PageStyles.FlexDiv width={'70%'}>
                <PageStyles.PaddingWrapper>
                  <PageStyles.Subheading noMarginTop small>Featured course</PageStyles.Subheading>
                  <PageStyles.Subheading noMarginTop accent>{c.name}</PageStyles.Subheading>
                  <PageStyles.TagGroup>
                    {c.tags.children ? <PageStyles.Tag tagColor={'#58b947'}>Perfect for children</PageStyles.Tag> : null}
                    {c.tags.adults ? <PageStyles.Tag tagColor={'#e82128'}>Perfect for Adults</PageStyles.Tag> : null}
                  </PageStyles.TagGroup>
                  <PageStyles.Divider />
                  <PageStyles.Description>{c.description}</PageStyles.Description>
                </PageStyles.PaddingWrapper>
              </PageStyles.FlexDiv>
            </PageStyles.FlexWrapper>

          </PageStyles.BackgroundWrapper>
          {(index + 1) === displayData.courses.length ? null : <PageStyles.Break />}
        </> : <>
          <PageStyles.BackgroundWrapper background={'#eee'}>
            <PageStyles.FlexWrapper>
              <PageStyles.FlexDiv width={'30%'}>
                  <PageStyles.PaddingWrapper fullHeight>
                    <PageStyles.BackgroundWrapper fullHeight centerVertical background={'#ddd'}>
                      <PageStyles.WideImage padded={'5px'} src={serverPath + c.cover.url} />
                    </PageStyles.BackgroundWrapper>
                  </PageStyles.PaddingWrapper>
              </PageStyles.FlexDiv>
              <PageStyles.FlexDiv width={'70%'}>
                <PageStyles.PaddingWrapper>
                  <PageStyles.Subheading noMarginTop accent>{c.name}</PageStyles.Subheading>
                  <PageStyles.TagGroup>
                    {c.tags.children ? <PageStyles.Tag tagColor={'#58b947'}>Perfect for children</PageStyles.Tag> : null}
                    {c.tags.adults ? <PageStyles.Tag tagColor={'#e82128'}>Perfect for Adults</PageStyles.Tag> : null}
                  </PageStyles.TagGroup>
                  <PageStyles.Divider />
                  <PageStyles.Description>{c.description}</PageStyles.Description>
                </PageStyles.PaddingWrapper>
              </PageStyles.FlexDiv>
            </PageStyles.FlexWrapper>

          </PageStyles.BackgroundWrapper>
          {(index + 1) === displayData.courses.length ? null : <PageStyles.Break />}
        </>}
      </React.Fragment>)}

      
    </PageStyles.Content>
    
  </>
}

export default About;
