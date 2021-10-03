import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const SearchBar = () => {
  const { setFilter, filter } = useContext(GlobalContext);
  const [name, setName] = useState('');

  useEffect(() => {
    setFilter({ filters: { ...filter.filters, filterByName: { name } } });
  }, [name]);

  return (
    <form>
      <input
        type="text"
        placeholder="filter by name"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </form>
  );
};

export default SearchBar;
