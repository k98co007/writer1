export interface CardData {
    title: string;
    actor: string;
    description: string;
    imageUrl: string;
  }
  
  export interface CardList {
    [key: string]: CardData[];
  }
  