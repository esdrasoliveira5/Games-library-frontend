import { Route, Routes } from 'react-router-dom';
import GamesProvider from './context/GamesProvider';
import Categories from './pages/Categories';
import Description from './pages/Description';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <GamesProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game/:id" element={<Description />} />
      </Routes>
    </GamesProvider>
  );
}

export default App;
