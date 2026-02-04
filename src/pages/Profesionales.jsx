import styled from 'styled-components';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { FaUserMd, FaStethoscope, FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large} 0;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const BackButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
`;

const Specialty = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Button = styled(Link)`
  margin-top: auto;
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NoResults = styled.div`
    text-align: center;
    grid-column: 1 / -1;
    color: #666;
    font-size: 1.2rem;
    padding: 40px;
`;

const Profesionales = () => {
  const { doctors } = useData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const specialtyFilter = searchParams.get('specialty');

  const filteredDoctors = specialtyFilter
    ? doctors.filter(doc => doc.specialty === specialtyFilter)
    : doctors;

  return (
    <Container>
      <Header>
        {specialtyFilter && (
          <BackButton onClick={() => navigate('/especialidades')}>
            <FaArrowLeft /> Volver
          </BackButton>
        )}
        <Title>
          {specialtyFilter ? `Especialistas en ${specialtyFilter}` : 'Nuestros Profesionales'}
        </Title>
        <div style={{ width: '100px' }}></div> {/* Spacer for symmetry */}
      </Header>

      <Grid>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doc => (
            <Card key={doc.id}>
              <ImageContainer>
                <img src={doc.image} alt={doc.name} />
              </ImageContainer>
              <Content>
                <Name>{doc.name}</Name>
                <Specialty>
                  <FaStethoscope /> {doc.specialty}
                </Specialty>
                <Button to={`/medico/${doc.id}`}>Solicitar Turno</Button>
              </Content>
            </Card>
          ))
        ) : (
          <NoResults>
            No se encontraron profesionales para esta especialidad.
            <br /><br />
            <Link to="/especialidades" style={{ color: '#2a9d8f' }}>Ver otras especialidades</Link>
          </NoResults>
        )}
      </Grid>
    </Container>
  );
};

export default Profesionales;
