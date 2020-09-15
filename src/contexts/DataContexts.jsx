import React from 'react';

// Contexts
import { AboutUsProvider } from './data/AboutUsContext';
import { AwardsProvider } from './data/AwardsContext';
import { BlogProvider } from './data/BlogContext';
import { BlogPostSourcesProvider } from './data/BlogPostSourcesContext';
import { CoursesProvider } from './data/CoursesContext';
import { CustomerTestimonialsProvider } from './data/CustomerTestimonialsContext';
import { FooterProvider } from './data/FooterContext';
import { HomepageProvider } from './data/HomepageContext';
import { NavbarProvider } from './data/NavbarContext';
import { NewsProvider } from './data/NewsContext';
import { OrganisationsPageProvider } from './data/OrganisationsPageContext';
import { OrganisationsProvider } from './data/OrganisationsContext';
import { VideosProvider } from './data/VideosContext';

const DataContexts = ({children}) => {
  return <>
  <AboutUsProvider>
    <AwardsProvider>
      <BlogProvider>
        <BlogPostSourcesProvider>
          <CoursesProvider>
            <CustomerTestimonialsProvider>
              <FooterProvider>
                <HomepageProvider>
                  <NavbarProvider>
                    <NewsProvider>
                      <OrganisationsPageProvider>
                        <OrganisationsProvider>
                          <VideosProvider>
                            {children}
                          </VideosProvider>
                        </OrganisationsProvider>
                      </OrganisationsPageProvider>
                    </NewsProvider>
                  </NavbarProvider>
                </HomepageProvider>
              </FooterProvider>
            </CustomerTestimonialsProvider>
          </CoursesProvider>
        </BlogPostSourcesProvider>
      </BlogProvider>
    </AwardsProvider>
  </AboutUsProvider>
  </>
}

export default DataContexts;