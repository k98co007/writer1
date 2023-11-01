import React, { useState } from 'react';
import { CardData, CardList } from './DataInterface';

import Header from './components/Header';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


import './App.css';
import './styles/app.css';

import data from './RawData';

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('avengers');
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [cardDataList, setCardDataList] = useState<CardList>(data);

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar activeMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
        <div className="cards-area">
          {!selectedCard ? (
            <div className="cards-container">
              {cardDataList[selectedMenu].map((card: CardData) => (
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
      <Footer />
    </div>
  );
}

export default App;