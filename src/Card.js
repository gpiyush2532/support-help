import React from 'react';
import './Card.css';

const Card = ({ title, imageUrl, linkUrl }) => {
  const handleClick = () => {
    window.location.href = linkUrl;
  };

  return (
    <div className='card' onClick={handleClick}>
      <div className='card-image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='card-title'>{title}</div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className='card-list'>
      <Card title='Card 1' imageUrl='https://via.placeholder.com/150' linkUrl='/card1' />
      <Card title='Card 2' imageUrl='https://via.placeholder.com/150' linkUrl='/card2' />
      <Card title='Card 3' imageUrl='https://via.placeholder.com/150' linkUrl='/card3' />
      <Card title='Card 4' imageUrl='https://via.placeholder.com/150' linkUrl='/card4' />
      <Card title='Card 5' imageUrl='https://via.placeholder.com/150' linkUrl='/card5' />
      <Card title='Card 6' imageUrl='https://via.placeholder.com/150' linkUrl='/card6' />
    </div>
  );
};

export default CardList;
