import React from 'react';

interface CardProps {
    title: string;
    actor: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ title, actor, description, imageUrl, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        <img src={imageUrl} alt={`${title}`} />
        <h2>{title}</h2>
        <p>{actor}</p>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;
