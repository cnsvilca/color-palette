import { useContext } from 'react';
import Favorite from './Favorite';
import './Favorites.css'
import {FavoriteContext} from '../../context/FavoriteContext'

const Favorites = () => {
    const {favorites} = useContext(FavoriteContext)
    return (
        <div className='favorite-container'>
            <h2 className='fav-title'>Mis Favoritos</h2>

            {favorites.length === 0 ? (
                <span>no hay paletas aqui!!!</span>
            ) : (
                favorites.map((favorite) => (
                    <Favorite key={favorite.id} favorite={favorite}></Favorite>
                ))
            )
            }
        </div>
    );
};

export default Favorites;