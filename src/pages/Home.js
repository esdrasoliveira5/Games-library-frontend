import React, { useEffect } from 'react';
import fetchRawg from '../services/fetchRawg';

function Home() {
  useEffect(() => {
    const gamesHome = async () => {
      const games = await fetchRawg.fetchApi();
      console.log(games.results);
    };
    gamesHome();
  }, []);
  return (
    <div>Home</div>
  );
}

export default Home;
