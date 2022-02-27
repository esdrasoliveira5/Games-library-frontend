const URL_RAWG = 'https://api.rawg.io/api/games?key=f53f83cd1797486ba34f66d64fd0418e';
const URL_RAWG_GENRES = 'https://api.rawg.io/api/genres?key=f53f83cd1797486ba34f66d64fd0418e';
const fetchGamesPages = async (page) => {
  try {
    const response = await fetch(`${URL_RAWG}&page=${page}&page_size=20`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
};

const fetchSearchGames = async (page, ordering, search) => {
  try {
    const response = await fetch(`${URL_RAWG}&page=${page}&page_size=20&ordering=${ordering}&search=${search}`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
};

const fetchGamesgenres = async () => {
  try {
    const response = await fetch(`${URL_RAWG_GENRES}`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
};

export default {
  fetchGamesPages,
  fetchSearchGames,
  fetchGamesgenres,
};
