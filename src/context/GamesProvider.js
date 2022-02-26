import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import gamesContext from './AppContext';

function GamesProvider({ children }) {
  const [logged, setLogged] = useState(true);
  const [games, setGames] = useState([]);
  const contextValue = useMemo(() => ({
    logged,
    setLogged,
    games,
    setGames,
  }), [logged, games]);

  return (
    <gamesContext.Provider value={contextValue}>
      { children }
    </gamesContext.Provider>
  );
}

GamesProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default GamesProvider;
