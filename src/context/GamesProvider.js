import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import gamesContext from './AppContext';

function GamesProvider({ children }) {
  const [logged, setLogged] = useState(true);
  const [searchContext, setSearchContext] = useState({
    searchBar: false,
    searchGenres: false,
    search: '',
    ordering: 'name',
    genre: '',
    page: 1,
  });
  const [games, setGames] = useState([]);
  const [genres, setgenres] = useState([]);
  const contextValue = useMemo(() => ({
    logged,
    setLogged,
    searchContext,
    setSearchContext,
    games,
    setGames,
    genres,
    setgenres,
  }), [logged, searchContext, games, genres]);

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
