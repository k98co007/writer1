import { CardData, CardList } from './DataInterface';

const spidermanData: CardData = {
    title: "Spiderman",
    actor: "Sam",
    description: "hero movie",
    imageUrl: "spider.png"
  };

const IronManData: CardData = {
    title: "Iron Man",
    actor: "Tony",
    description: "Metal suited hero",
    imageUrl: "ironman.png"
    };


    const WolverineData: CardData = {
        title: "Wolverine",
        actor: "Logan",
        description: "Hero with claws",
        imageUrl: "wolverine.png"
      };

const BatmanData: CardData = {
        title: "Batman",
        actor: "Bruce",
        description: "Dark knight",
        imageUrl: "batman.png"
      };

const FrankensteinData: CardData = {
        title: "Frankenstein",
        actor: "Frank",
        description: "Created monster",
        imageUrl: "frankenstein.png"
      };




  const RawData: CardList = {
    avengers: [
      // Sample data for Avengers cards
      IronManData,
      spidermanData,
      //... more avengers cards data
    ],
    heroes: [
        IronManData,
      //... more heroes cards data
    ],
    marvels: [
      // Sample data for Marvels cards
      WolverineData,
      //... more marvels cards data
    ],
    comics: [
      // Sample data for Comics cards
      BatmanData,
      //... more comics cards data
    ],
    monsters: [
      // Sample data for Monsters cards
      FrankensteinData,
      //... more monsters cards data
    ]
  }
  

export default RawData;