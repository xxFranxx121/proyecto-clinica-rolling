import styled from 'styled-components';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.large};
  margin-top: auto;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  padding: 0 ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.medium};
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.small};
  display: inline-block;
  width: max-content;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  line-height: 1.5;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const PhonesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.medium};

  a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.85rem;
  opacity: 0.8;
  letter-spacing: 0.5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Contáctanos</SectionTitle>
          <ContactItem>
            <FaPhone />
            <PhonesList>
              <span>385 – 421 4652</span>
              <span>385 – 421 2767</span>
            </PhonesList>
          </ContactItem>
          <ContactItem>
            <FaWhatsapp />
            <span>385 – 155 938 904</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Mitre 279 – SDE</span>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Horarios</SectionTitle>
          <ContactItem>
            <span>Lunes a Viernes: 08:00 - 20:00</span>
          </ContactItem>
          <ContactItem>
            <span>Sábados: 08:00 - 13:00</span>
          </ContactItem>
          <ContactItem>
            <span>Guardia 24hs</span>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Redes Sociales</SectionTitle>
          <p>Seguinos para novedades y consejos.</p>
          <SocialLinks>
            <Link to="/404" title="Facebook"><FaFacebook /></Link>
            <Link to="/404" title="Instagram"><FaInstagram /></Link>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Azahares Centro Integral de Salud. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
