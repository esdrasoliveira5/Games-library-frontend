import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import gamesContext from '../context/AppContext';

const SearchBarForm = styled.form`
  width: 55%;
  @media screen and (max-width: 1000px) {
    width: 70%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LabelSearch = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  input {
    text-decoration: none;
    text-transform: uppercase;
    background: #fff;
    outline: 0;
    border-radius: 5px 0px 0px 5px;
    padding: 10px;
    width: 100%;
  }
  input:focus {
    background: #dbdbdb;
  }
`;

const SelectSearch = styled.label`
  position: relative;
  min-width: 150px;
  select {
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 0px 0px 0px 0px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
`;

const ButtonSearchL = styled.div`
  button {
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    background: #E5383B;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    padding: 10px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  button:hover {
    background-color: #660708;
  }
`;

const ButtonSearchR = styled.div`
  button {
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    background: #E5383B;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    padding: 10px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  button:hover {
    background-color: #660708;
  }
`;

function SearchBar() {
  const { setSearchContext } = useContext(gamesContext);
  const { genresSearch, setGenresSearch } = useContext(gamesContext);
  const [searchValues, setSearchValues] = useState({
    on: true,
    search: '',
    ordering: 'name',
    page: 1,
  });

  function handleValues({ target }) {
    const { name, value } = target;
    setSearchValues({
      ...searchValues,
      [name]: value,
    });
  }

  function searchGames() {
    const {
      on, search, ordering, page,
    } = searchValues;
    setSearchContext({
      on,
      search,
      ordering,
      page,
    });
    setGenresSearch(false);
  }

  function searchgenres() {
    setGenresSearch(!genresSearch);
  }

  return (
    <SearchBarForm>
      <ButtonSearchL>
        <button
          type="button"
          onClick={searchgenres}
        >
          Generos
        </button>
      </ButtonSearchL>
      <LabelSearch htmlFor="serch">
        <input
          type="text"
          name="search"
          value={searchValues.search}
          onChange={(event) => handleValues(event)}
          placeholder="Games"
        />
      </LabelSearch>
      <SelectSearch htmlFor="order">
        <select
          name="ordering"
          value={searchValues.ordering}
          onChange={(event) => handleValues(event)}
        >
          <option value="name">Nome</option>
          <option value="released">Lançamento</option>
          <option value="rating">Avaliação</option>
        </select>
      </SelectSearch>
      <ButtonSearchR>
        <button
          type="button"
          onClick={searchGames}
        >
          Search
        </button>
      </ButtonSearchR>
    </SearchBarForm>
  );
}

export default SearchBar;
