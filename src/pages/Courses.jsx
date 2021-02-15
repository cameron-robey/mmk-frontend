// Modules
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Contexts
import { serverPath } from './../api/config';
import { useCourses } from './../contexts/data/CoursesContext';
import { useFooter } from '../contexts/data/FooterContext';

// Components
import NavbarFiller from './../components/Helpers/NavbarFiller';
import PageTitle from './../components/Helpers/PageTitle';

// Styles
import * as PageStyles from './styles/PageStyles';

const Courses = () => {
  const courses = useCourses();
  const footer = useFooter();

  const [displayData, setDisplayData] = useState(undefined);
  const [footerData, setFooterData] = useState(undefined);

  useEffect(() => {
    // Get data on page load
    courses.getData();
    footer.getData();
  }, []);

  useEffect(() => {
    setDisplayData(courses.data);
  }, [courses.data]);

  useEffect(() => {
    setFooterData(footer.data);
  }, [footer.data]);

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
          <PageStyles.BackgroundWrapper background={index === 0 ? '#d4ebfb' : '#eee'}>
            
            <PageStyles.FlexWrapper>

              <PageStyles.FlexDiv width={'30%'}>
                <PageStyles.PaddingWrapper fullHeight>
                  <PageStyles.BackgroundWrapper fullHeight centerVertical background={index === 0 ? '#bfdcf0' : '#ddd'}>
                    <PageStyles.WideImage padded={'5px'} src={serverPath + c.cover.url} />
                  </PageStyles.BackgroundWrapper>
                </PageStyles.PaddingWrapper>
              </PageStyles.FlexDiv>

              <PageStyles.FlexDiv width={'70%'}>
                <PageStyles.PaddingWrapper>

                  <PageStyles.Subheading noMarginTop small>
                    {index === 0 ? 'Featured' : ''} {c.type === 'weekly' ? 'Weekly Course' : c.type === 'weeklong' ? 'Weeklong Course' : ''}
                  </PageStyles.Subheading>

                  <PageStyles.Subheading noMarginTop accent>{c.name}</PageStyles.Subheading>

                  <PageStyles.TagGroup>
                    {c.tags.children ? <PageStyles.Tag tagColor={'#58b947'}>Perfect for children</PageStyles.Tag> : null}
                    {c.tags.adults ? <PageStyles.Tag tagColor={'#e82128'}>Perfect for adults</PageStyles.Tag> : null}
                    {c.tags.all_ages ? <PageStyles.Tag tagColor={'#ffc525'}>Perfect for all</PageStyles.Tag> : null}
                    {c.tags.beginner ? <PageStyles.Tag tagColor={'#09a6df'}>Beginner course</PageStyles.Tag> : null}
                    {c.tags.advanced ? <PageStyles.Tag tagColor={'#acd037'}>Advanced course</PageStyles.Tag> : null}
                    {c.tags.short_term ? <PageStyles.Tag tagColor={'#f26a24'}>Short term</PageStyles.Tag> : null}
                    {c.tags.long_term ? <PageStyles.Tag tagColor={'#964bd6'}>Long term</PageStyles.Tag> : null}
                    {c.tags.online ? <PageStyles.Tag tagColor={'#0060a2'}>Online</PageStyles.Tag> : null}
                  </PageStyles.TagGroup>

                  <PageStyles.Divider />

                  <PageStyles.TextBlock><ReactMarkdown source={c.description} /></PageStyles.TextBlock>

                  <PageStyles.TextBlock>
                    <PageStyles.UnstyledLinkA href={`mailto:${footerData?.contact?.email}`}>
                      <PageStyles.ContactBlock>
                        <FontAwesomeIcon icon={faEnvelope} />Email:&nbsp;&nbsp;<span>{footerData?.contact?.email}</span>
                      </PageStyles.ContactBlock>
                    </PageStyles.UnstyledLinkA>
                    <PageStyles.UnstyledLinkA href={`tel:${footerData?.contact?.phone.split(' ').join('')}`}>
                      <PageStyles.ContactBlock>
                        <FontAwesomeIcon icon={faPhone} />Phone:&nbsp;&nbsp;<span>{footerData?.contact?.phone}</span>
                      </PageStyles.ContactBlock>
                    </PageStyles.UnstyledLinkA>
                  </PageStyles.TextBlock>

                </PageStyles.PaddingWrapper>
              </PageStyles.FlexDiv>

            </PageStyles.FlexWrapper>

          </PageStyles.BackgroundWrapper>
          
          {(index + 1) === displayData.courses.length ? null : <PageStyles.Break />}
      </React.Fragment>)}

      
    </PageStyles.Content>
    
  </>
}

export default Courses;
