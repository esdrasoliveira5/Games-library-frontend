const fetchApi = async () => {
  const response = await fetch('https://api.rawg.io/api/games?key=f53f83cd1797486ba34f66d64fd0418e&search=call-of-duty');
  const results = await response.json();
  return results;
};

export default {
  fetchApi,
};
