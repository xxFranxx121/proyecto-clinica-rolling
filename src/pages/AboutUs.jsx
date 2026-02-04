import styled from 'styled-components';
import { FaHeart, FaUserMd, FaAward, FaClock } from 'react-icons/fa';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  max-width: 1000px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.div`
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const Card = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const AboutUs = () => {
    return (
        <Container>
            <Hero>
                <Title>Acerca de Nosotros</Title>
                <Subtitle>
                    Clínica Azahares es un centro de salud integral comprometido con brindar atención médica
                    de excelencia a nuestra comunidad. Nuestro equipo de profesionales altamente capacitados
                    trabaja día a día para cuidar tu salud y bienestar.
                </Subtitle>
            </Hero>

            <Section>
                <SectionTitle>Nuestros Valores</SectionTitle>
                <Grid>
                    <Card>
                        <IconWrapper><FaHeart /></IconWrapper>
                        <CardTitle>Compromiso</CardTitle>
                        <CardText>
                            Nos dedicamos plenamente al cuidado y bienestar de nuestros pacientes.
                        </CardText>
                    </Card>

                    <Card>
                        <IconWrapper><FaUserMd /></IconWrapper>
                        <CardTitle>Profesionalismo</CardTitle>
                        <CardText>
                            Contamos con un equipo médico altamente calificado y en constante actualización.
                        </CardText>
                    </Card>

                    <Card>
                        <IconWrapper><FaAward /></IconWrapper>
                        <CardTitle>Excelencia</CardTitle>
                        <CardText>
                            Nos esforzamos por ofrecer servicios de la más alta calidad en cada consulta.
                        </CardText>
                    </Card>

                    <Card>
                        <IconWrapper><FaClock /></IconWrapper>
                        <CardTitle>Disponibilidad</CardTitle>
                        <CardText>
                            Horarios flexibles y atención personalizada para adaptarnos a tus necesidades.
                        </CardText>
                    </Card>
                </Grid>
            </Section>

            <Section>
                <SectionTitle>Nuestra Misión</SectionTitle>
                <Card>
                    <CardText style={{ fontSize: '1.1rem', textAlign: 'left' }}>
                        Proveer servicios de salud integrales, accesibles y de calidad a nuestra comunidad,
                        trabajando con un enfoque humano y tecnología de punta. Nos comprometemos a estar
                        cerca de vos en cada etapa de tu vida, brindando atención médica personalizada que
                        te permita vivir de manera más saludable y plena.
                    </CardText>
                </Card>
            </Section>
        </Container>
    );
};

export default AboutUs;
