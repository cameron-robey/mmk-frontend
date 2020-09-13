import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { useLocation } from 'react-router-dom';

// Contexts
import { useNavbar } from './../../contexts/data/NavbarContext';

// Helpers
import { serverPath } from './../../api/config';

// Styles
import * as styles from './styles/NavbarStyles';

const Navbar = () => {
  const navbar = useNavbar();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [displayStatic, setDisplayStatic] = useState(false);
  const [navbarData, setNavbarData] = useState({});
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    navbar.getData();
    if (location.pathname !== '/') setDisplayStatic(true);

  }, []);

  useEffect(() => {
    if (location.pathname !== '/') setDisplayStatic(true);
    else setDisplayStatic(false);

    setNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    setNavbarData(navbar.data);
  }, [navbar.data]);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 150 && scrolled === false) setScrolled(true);
      if (window.pageYOffset < 150 && scrolled === true) setScrolled(false);
    } 
    window.addEventListener("scroll", onScroll);
    return window.addEventListener("scroll", onScroll);
  }, [scrolled]);

  if (!navbarData) return null;

  return <>
    <styles.NavWrapper>
      <styles.NavLogoLink to={'/'}><styles.NavLogo src={serverPath + navbarData.logo?.formats.thumbnail.url} /></styles.NavLogoLink>
          <styles.Nav colored={(displayStatic || scrolled)}>
              <styles.NavList>
                  {
                    navbarData.links?.map( (link, index) => {
                      return <styles.NavListItem key={index}>
                        <styles.NavTextLink  to={ link.link } >{ link.display_text }</styles.NavTextLink>
                      </styles.NavListItem>
                    })
                  }
                  <styles.NavListItemRight>
                    <styles.NavTextA href={ navbarData.social_media?.youtube } ><FontAwesomeIcon icon={ faYoutube } /></styles.NavTextA>
                  </styles.NavListItemRight>
                  <styles.NavListItemRight>
                    <styles.NavTextA href={ `mailto:${navbarData.social_media?.email}` } ><FontAwesomeIcon icon={ faEnvelope } /></styles.NavTextA>
                  </styles.NavListItemRight>
                  <styles.NavListItemRight>
                    <styles.NavTextA href={ navbarData.social_media?.linkedin } ><FontAwesomeIcon icon={ faLinkedin } /></styles.NavTextA>
                  </styles.NavListItemRight>
                  <styles.NavListItemRight>
                    <styles.NavTextA href={ navbarData.social_media?.instagram } ><FontAwesomeIcon icon={ faInstagram } /></styles.NavTextA>
                  </styles.NavListItemRight>
                  <styles.NavListItemRight>
                    <styles.NavTextA href={ navbarData.social_media?.twitter } ><FontAwesomeIcon icon={ faTwitter } /></styles.NavTextA>
                  </styles.NavListItemRight>
              </styles.NavList>
          </styles.Nav>

          <styles.NavMobile>
            <styles.NavMobileContainer>
              <styles.NavLogoLinkMobile to={'/'}>
                <styles.NavLogoMobile src={serverPath + navbarData.logo?.formats.thumbnail.url} />
              </styles.NavLogoLinkMobile>
              <styles.NavMenuButton to={'/'}>
                <styles.NavMenuButtonText>HOME</styles.NavMenuButtonText>
              </styles.NavMenuButton>
              <styles.NavMenuButtonRight onClick={() => setNavOpen(!navOpen)}>
                <styles.NavMenuButtonText>MENU</styles.NavMenuButtonText>
              </styles.NavMenuButtonRight>
            </styles.NavMobileContainer>
          </styles.NavMobile>

          <styles.NavDropdown navOpen={navOpen}>
            <styles.NavListMobile>
              {
                navbarData.links?.map( (link, index) => {
                  return <styles.NavListItemMobile key={index}>
                    <styles.NavTextLinkMobile to={ link.link } >{ link.display_text }</styles.NavTextLinkMobile>
                  </styles.NavListItemMobile>
                })
              }
            </styles.NavListMobile>
          </styles.NavDropdown>
    </styles.NavWrapper>
  </>
}

export default Navbar;