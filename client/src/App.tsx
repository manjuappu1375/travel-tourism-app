import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'leaflet/dist/leaflet.css';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #ebf8ff, #e0e7ff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  margin-top: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
