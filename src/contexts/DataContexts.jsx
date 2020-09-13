import React from 'react';

// Contexts
import { AboutUsProvider } from './data/AboutUsContext';
import { AwardsProvider } from './data/AwardsContext';
import { BlogPostsProvider } from './data/BlogPostsContext';
import { BlogPostSourcesProvider } from './data/BlogPostSourcesContext';
import { ContactProvider } from './data/ContactContext';
import { CoursesProvider } from './data/CoursesContext';
import { CustomerTestimonialsProvider } from './data/CustomerTestimonialsContext';
import { HomepageProvider } from './data/HomepageContext';
import { NavbarProvider } from './data/NavbarContext';
import { OrganisationsProvider } from './data/OrganisationsContext';


const DataContexts = ({children}) => {
  return <>
  <AboutUsProvider>
    <AwardsProvider>
      <BlogPostsProvider>
        <BlogPostSourcesProvider>
          <ContactProvider>
            <CoursesProvider>
              <CustomerTestimonialsProvider>
                <HomepageProvider>
                  <NavbarProvider>
                    <OrganisationsProvider>
                      {children}
                    </OrganisationsProvider>
                  </NavbarProvider>
                </HomepageProvider>
              </CustomerTestimonialsProvider>
            </CoursesProvider>
          </ContactProvider>
        </BlogPostSourcesProvider>
      </BlogPostsProvider>
    </AwardsProvider>
  </AboutUsProvider>
  </>
}

export default DataContexts;