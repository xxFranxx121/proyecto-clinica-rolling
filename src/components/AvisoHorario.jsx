import styled from 'styled-components';
import { FaClock } from 'react-icons/fa';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.large} auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

const Badge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
`;

const HighlightText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubText = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin: 0;
  font-style: italic;
`;

const IconWrapper = styled.div`
  display: none;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    margin-left: ${({ theme }) => theme.spacing.large};
  }
`;

const AvisoHorario = () => {
    return (
        <CardContainer>
            <ContentSection>
                <Badge>Aviso Importante</Badge>
                <Title>Nuevo Horario de Atención</Title>
                <HighlightText>
                    de 8 a 20:30 hs
                </HighlightText>
                <SubText>Desde el jueves 8 de junio</SubText>
            </ContentSection>
            <IconWrapper>
                <FaClock />
            </IconWrapper>
        </CardContainer>
    );
};

export default AvisoHorario;
