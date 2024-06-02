// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const RadioLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
`;

const SearchBar = ({ query, setQuery, searchType, setSearchType, search, clearResults }) => (
  <SearchBarContainer>
    <Input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Поиск музыки или артистов"
    />
    <div>
      <Button onClick={search}>Поиск</Button>
    </div>
    <div>
      <RadioLabel>
        <input
          type="radio"
          value="track"
          checked={searchType === 'track'}
          onChange={() => setSearchType('track')}
        />
        Музыка
      </RadioLabel>
      <RadioLabel>
        <input
          type="radio"
          value="artist"
          checked={searchType === 'artist'}
          onChange={() => setSearchType('artist')}
        />
        Артисты
      </RadioLabel>
    </div>
  </SearchBarContainer>
);

export default SearchBar;
