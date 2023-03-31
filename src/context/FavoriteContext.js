import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    favorites:[],
    setFavorites: () =>{}
})

export const FavoriteProvider = ({children}) =>{
    const [favorites, setFavorites] = useState([]);
    const value = {favorites, setFavorites};

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}