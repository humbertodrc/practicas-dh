import { ReactNode, useContext, useState } from 'react'
import { CardContext } from './CardContext'


const Card = ({children} : {children: ReactNode}) => {
    // Crear los estados y funciones para consumir en el resto de los childrens
  const [likes, setLikes] = useState(0)
  const [shares, setShares] = useState(0)

  const handleLikes = () => {
    setLikes(likes + 1)
  }

  const handleShares = () => {
    setShares(shares + 1)
  }

  return (
    <CardContext.Provider value={{
      likes,
      shares,
      handleLikes,
      handleShares
    }}>
      {children}
    </CardContext.Provider>
    
    )

}

Card.Image = ({source} : {source:string}) => {
  return (
    <div>
      <img src={source} alt="ricky and morty" />
    </div>
    )
}

Card.Actions = () => {

  const {likes, shares, handleLikes, handleShares} = useContext(CardContext)

  return (
    <div>
      <button onClick={handleLikes}>Like {likes}</button>
      <button onClick={handleShares}>Share {shares}</button>
    </div>
    )
}

export default Card;