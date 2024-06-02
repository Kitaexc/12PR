// src/components/ArtistList.js
import React from 'react';
import styled from 'styled-components';
import ArtistCard from './ArtistCard';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
  & > div {
    flex: 1 1 calc(25% - 20px);
    max-width: calc(25% - 20px);
    box-sizing: border-box;
  }
`;

const ArtistList = ({ artists }) => (
  <List>
    {artists.slice(0, 10).map((artist) => (
      <ArtistCard key={artist.id} artist={artist} />
    ))}
  </List>
);

export default ArtistList;
