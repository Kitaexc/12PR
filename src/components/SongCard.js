// src/components/SongCard.js
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

const SongImage = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
`;

const SongCard = ({ song }) => {
  const imageUrl = song.album.images && song.album.images.length > 0 ? song.album.images[0].url : 'https://via.placeholder.com/100';
  return (
    <Card>
      <SongImage src={imageUrl} alt={song.name} width="100" />
      <h3>{song.name}</h3>
      <p>{song.artists.map(artist => artist.name).join(', ')}</p>
      <audio controls src={song.preview_url}>
        Ваш браузер не поддерживает аудиоэлемент.
      </audio>
    </Card>
  );
};

export default SongCard;
