import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DescriptionGame from '../components/DescriptionGame';
import Footer from '../components/Footer';
import Header from '../components/Header';
import gamesContext from '../context/AppContext';
import Halo from '../img/Halo.png';
import Rawg from '../services/fetchRawg';
import GameLibrary from '../services/fetchGameLibrary';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(90deg, #E5383B 0%, #660708 100%);
  overflow: hidden;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.main`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
    padding-top: 10%;
    height: 110%;
    position: absolute;
    z-index: 0;
    left: 25%;
`;

function Description() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = Number(location.pathname.split('/')[2]);
  const [game, setGame] = useState({});
  const [screenshoots, setScreenshoots] = useState([]);
  const [collection, setCollection] = useState(0);
  const { logged, setLogged } = useContext(gamesContext);
  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem('game-library'));
      if (localResponse !== null) {
        const { token } = localResponse;
        const response = await GameLibrary.getUser(token);
        const { categoriesId } = await GameLibrary.getCollection(token, path);
        const gameResponse = await Rawg.fetchGameId(path, '');
        const screenshootsResponse = await Rawg.fetchGameId(path, '/screenshots');
        if (!response.error) {
          if (!game.id) {
            setGame(gameResponse);
            setScreenshoots(screenshootsResponse.results);
            if (categoriesId !== undefined) {
              setCollection(categoriesId);
            }
          }
          setLogged(true);
        } else {
          setLogged(false);
          navigate('/');
        }
      } else {
        setLogged(false);
        navigate('/');
      }
    };
    userLogged();
  }, []);
  return (
    <BigContainer>
      <Header />
      {
        logged && game.id !== undefined ? (
          <MainContainer>
            <Container>
              <Image src={Halo} alt="Master Chief" />
              <DescriptionGame game={game} screenshoots={screenshoots} collection={collection} />
            </Container>
          </MainContainer>
        ) : ''

      }
      <Footer />
    </BigContainer>
  );
}

export default Description;
