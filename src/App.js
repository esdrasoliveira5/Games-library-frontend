import { Route, Routes } from 'react-router-dom';
import GamesProvider from './context/GamesProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <GamesProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </GamesProvider>
  );
}

export default App;
