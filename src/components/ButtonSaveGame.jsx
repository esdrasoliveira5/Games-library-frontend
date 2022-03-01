import PropTypes from 'prop-types';
import React from 'react';

function ButtonSaveGame({ collection }) {
  const { categorie, categories } = collection;
  return (
    <div>
      { categorie === 0
        ? (
          <button type="button">
            Adicionar aos Favoritos
          </button>
        )
        : (
          <select>
            {categories.map(({ name, id }) => <option value={id}>{name}</option>)}
          </select>
        )}
    </div>
  );
}

ButtonSaveGame.propTypes = {
  collection: PropTypes.number.isRequired,
};

export default ButtonSaveGame;
