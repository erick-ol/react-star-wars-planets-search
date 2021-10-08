import React from 'react';
import GlobalStorage from './context/GlobalStorage';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import FilteredElements from './components/FilteredElements';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStorage>
        <SearchBar />
        <FilteredElements />
        <Table />
      </GlobalStorage>
    </div>
  );
}

export default App;
