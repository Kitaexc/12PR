// src/components/ArtistCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-width: 200px;
`;

const ArtistImage = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ArtistCard = ({ artist }) => {
  const imageUrl = artist.images && artist.images.length > 0 ? artist.images[0].url : 'https://via.placeholder.com/100';
  return (
    <Card>
      <ArtistImage src={imageUrl} alt={artist.name} width="100" />
      <h3>{artist.name}</h3>
      <p>Followers: {artist.followers.total}</p>
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        Открыть в Spotify
      </a>
    </Card>
  );
};

export default ArtistCard;
