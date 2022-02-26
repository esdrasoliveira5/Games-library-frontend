import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import gamesContext from './AppContext';

function GamesProvider({ children }) {
  const [games, setGames] = useState([]);
  const contextValue = useMemo(() => ({
    games,
    setGames,
  }), [games, setGames]);

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
