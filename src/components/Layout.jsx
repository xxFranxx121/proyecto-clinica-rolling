import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
