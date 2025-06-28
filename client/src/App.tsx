import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
      <ChatSupport /> {/* Always on top, globally accessible */}
    </AppContainer>
  );
}

export default App;
