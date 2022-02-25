import { Route, Routes } from 'react-router-dom';
import GamesProvider from './context/PortfolioProvider';
import Home from './pages/Home';

function App() {
  return (
    <GamesProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </GamesProvider>
  );
}

export default App;
