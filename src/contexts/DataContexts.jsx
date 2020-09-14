import React from 'react';

// Contexts
import { AboutUsProvider } from './data/AboutUsContext';
import { AwardsProvider } from './data/AwardsContext';
import { BlogPostsProvider } from './data/BlogPostsContext';
import { BlogPostSourcesProvider } from './data/BlogPostSourcesContext';
import { CoursesProvider } from './data/CoursesContext';
import { CustomerTestimonialsProvider } from './data/CustomerTestimonialsContext';
import { FooterProvider } from './data/FooterContext';
import { HomepageProvider } from './data/HomepageContext';
import { NavbarProvider } from './data/NavbarContext';
import { OrganisationsProvider } from './data/OrganisationsContext';
import { VideosProvider } from './data/VideosContext';

const DataContexts = ({children}) => {
  return <>
  <AboutUsProvider>
    <AwardsProvider>
      <BlogPostsProvider>
        <BlogPostSourcesProvider>
          <CoursesProvider>
            <CustomerTestimonialsProvider>
              <FooterProvider>
                <HomepageProvider>
                  <NavbarProvider>
                    <OrganisationsProvider>
                      <VideosProvider>
                        {children}
                      </VideosProvider>
                    </OrganisationsProvider>
                  </NavbarProvider>
                </HomepageProvider>
              </FooterProvider>
            </CustomerTestimonialsProvider>
          </CoursesProvider>
        </BlogPostSourcesProvider>
      </BlogPostsProvider>
    </AwardsProvider>
  </AboutUsProvider>
  </>
}

export default DataContexts;