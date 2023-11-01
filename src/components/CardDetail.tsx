import React from 'react';

interface CardDetailProps {
  title: string;
  actor: string;
  description: string;
  imageUrl: string;
  onBack: () => void;
}

const CardDetail: React.FC<CardDetailProps> = ({ title, actor, description, imageUrl, onBack }) => {
  return (
    <div className="card-detail">
      <button onClick={onBack}>Back to cards</button>
      <img src={imageUrl} alt={`${title}`} />
      <h2>{title}</h2>
      <p>{actor}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardDetail;
