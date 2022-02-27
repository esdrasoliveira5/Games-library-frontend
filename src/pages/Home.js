import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import gamesContext from '../context/AppContext';
import { getUser } from '../services/gameLibraryApi';
import Rawg from '../services/fetchRawg';
import HomeGamesPage from '../components/HomeGamesPage';
import Tifa from '../img/Tifa.png';
import SearchBar from '../components/SearchBar';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(90deg, #0B090A 0%, #660708 100%);
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    padding-top: 15%;
    @media screen and (max-width: 1000px) {
      left: 40%;
    }
    height: 1500px;
    position: absolute;
    z-index: 0;
    left: 70%;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

function Home() {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(gamesContext);
  const { searchContext, setSearchContext } = useContext(gamesContext);
  const { setGames, setgenres } = useContext(gamesContext);
  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem('game-library'));
      if (localResponse !== null) {
        const { token } = localResponse;
        const response = await getUser(token);
        const gamesResponse = await Rawg.fetchGamesPages(1);
        const genresResponse = await Rawg.fetchGamesgenres();
        if (!response.error) {
          setGames(gamesResponse.results);
          setgenres(genresResponse.results);
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
  }, [logged]);

  const {
    on, search, ordering, page,
  } = searchContext;
  useEffect(() => {
    const searchS = async () => {
      const gamesResponse = await Rawg.fetchSearchGames(page, ordering, search);
      setGames(gamesResponse.results);
    };
    if (on === true) {
      searchS();
    }
  }, [searchContext, setSearchContext]);

  return (
    <BigContainer>
      <Header />
      {
        logged ? (
          <MainContainer>
            <SearchBar />
            <Container>
              <img src={Tifa} alt="" />
              <HomeGamesPage />
            </Container>
          </MainContainer>
        ) : ''

      }

      <Footer />
    </BigContainer>
  );
}

export default Home;
