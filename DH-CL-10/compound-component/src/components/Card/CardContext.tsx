import { createContext } from 'react';

interface CardContextProp{
  likes: number;
  shares: number
  handleLikes: () => void;
  handleShares: () => void
}

export const CardContext = createContext({} as CardContextProp)