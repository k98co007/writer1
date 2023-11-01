import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
import Sidebar from './components/Sidebar';

import './App.css';
import './styles/app.css';


interface CardData {
  title: string;
  actor: string;
  description: string;
  imageUrl: string;
}

const spidermanData: CardData = {
  title: "Spiderman",
  actor: "Sam",
  description: "hero movie",
  imageUrl: "spider.png"
};

const data = {
  avengers: [
    // Sample data for Avengers cards
    {
      title: "Iron Man",
      actor: "Tony",
      description: "Metal suited hero",
      imageUrl: "ironman.png"
    },
    //... more avengers cards data
  ],
  heroes: [
    spidermanData,
    //... more heroes cards data
  ],
  marvels: [
    // Sample data for Marvels cards
    {
      title: "Wolverine",
      actor: "Logan",
      description: "Hero with claws",
      imageUrl: "wolverine.png"
    },
    //... more marvels cards data
  ],
  comics: [
    // Sample data for Comics cards
    {
      title: "Batman",
      actor: "Bruce",
      description: "Dark knight",
      imageUrl: "batman.png"
    },
    //... more comics cards data
  ],
  monsters: [
    // Sample data for Monsters cards
    {
      title: "Frankenstein",
      actor: "Frank",
      description: "Created monster",
      imageUrl: "frankenstein.png"
    },
    //... more monsters cards data
  ]
}

data.avengers.push(spidermanData);


const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('avengers');
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar activeMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
        <div className="cards-area">
          {!selectedCard ? (
            <div className="cards-container">
              {data[selectedMenu].map(card => (
                <Card 
                  key={card.title}
                  title={card.title}
                  actor={card.actor}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  onClick={() => setSelectedCard(card)}
                />
              ))}
            </div>
          ) : (
            <CardDetail 
              title={selectedCard.title}
              actor={selectedCard.actor}
              description={selectedCard.description}
              imageUrl={selectedCard.imageUrl}
              onBack={() => setSelectedCard(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;