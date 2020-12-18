import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';

// Contexts
import { serverPath } from '../../api/config';
import { useFooter } from '../../contexts/data/FooterContext';
import { useNavbar } from '../../contexts/data/NavbarContext';

// Styles
import * as styles from './styles/FooterStyles';

const Footer = ({data, ...props}) => {
  const footer = useFooter();
  const navbar = useNavbar();

  const [displayData, setDisplayData] = useState({});
  const [navbarData, setNavbarData] = useState({});

  useEffect(() => {
    footer.getData();
    navbar.getData();
  }, []);

  useEffect(() => {
    setDisplayData(footer.data);
  }, [footer.data]);

  useEffect(() => {
    setNavbarData(navbar.data);
  }, [navbar.data]);

  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.ContentWrapper>
        <styles.LogoMobile>
          <styles.LogoMobileImage src={serverPath + displayData?.logo?.formats.thumbnail.url} />
        </styles.LogoMobile>
        <styles.WideSection>
          <styles.ContentSection width={'50%'}>
            <styles.SectionTitle>Contact</styles.SectionTitle>

            <styles.Title>{displayData?.contact?.title}</styles.Title>

            <styles.FooterItem>
              <styles.ExternalLink href={`mailto:${displayData?.contact?.email}`}>
                <styles.Type><FontAwesomeIcon icon={ faEnvelope } />&nbsp;&nbsp;Email</styles.Type>
                <styles.Value>{displayData?.contact?.email}</styles.Value>
              </styles.ExternalLink>
            </styles.FooterItem>
            
            <styles.FooterItem>
              <styles.ExternalLink href={`tel:${displayData?.contact?.phone.split(' ').join('')}`}>
                <styles.Type><FontAwesomeIcon icon={ faPhone } />&nbsp;&nbsp;Phone</styles.Type>
                <styles.Value>{displayData?.contact?.phone}</styles.Value>
              </styles.ExternalLink>
            </styles.FooterItem>

            <styles.FooterItem>
              <styles.SocialLink href={ navbarData?.social_media?.twitter }><FontAwesomeIcon icon={faTwitter} /></styles.SocialLink>
              <styles.SocialLink href={ navbarData?.social_media?.youtube }><FontAwesomeIcon icon={faYoutube} /></styles.SocialLink>
              <styles.SocialLink href={ navbarData?.social_media?.linkedin }><FontAwesomeIcon icon={faLinkedin} /></styles.SocialLink>
              <styles.SocialLink href={ navbarData?.social_media?.instagram }><FontAwesomeIcon icon={faInstagram} /></styles.SocialLink>
            </styles.FooterItem>
          </styles.ContentSection>

          <styles.FooterDivider onlyMobile />

          <styles.ContentSection width={'50%'}>
            <styles.SectionTitle>Discover</styles.SectionTitle>

            <styles.Title>Browse content</styles.Title>

            {
              navbarData.links?.map( (link, index) => {
                return <styles.FooterItemDiscover key={index}>
                <styles.InternalLink to={link.link}>{link.display_text}</styles.InternalLink>
              </styles.FooterItemDiscover>
              })
            }
  
          </styles.ContentSection>
        </styles.WideSection>

        <styles.FooterDivider />

        <styles.WideSection>
          <styles.ContentSection width={'10%'}>
            <styles.Logo src={serverPath + displayData?.logo?.formats.thumbnail.url} />
          </styles.ContentSection>
          <styles.ContentSection width={'60%'} padding={true}>
            <styles.SectionTitle>Copyright</styles.SectionTitle>

            <styles.Type>&copy; Copyright {new Date().getFullYear()} MMK Academy</styles.Type>
          </styles.ContentSection>
          
            <styles.FooterDivider onlyMobile />

          <styles.ContentSection width={'30%'} right={true}>
            <styles.SectionTitle>Site design by</styles.SectionTitle>

            <styles.ExternalLink href="https://www.cameronrobey.co.uk">
              Cameron Robey
            </styles.ExternalLink>
          </styles.ContentSection>
        </styles.WideSection>
      </styles.ContentWrapper>

    </styles.MainWrapper>
  </>
}

export default Footer;