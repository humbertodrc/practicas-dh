import {createContext} from "react";

interface CardContextProps {
  likes: number;
  shares: number;
  handleLike: () => void;
  handleShare: () => void;
}

export const CardContext = createContext({} as CardContextProps);
