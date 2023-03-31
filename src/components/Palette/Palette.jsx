import { useContext, useState } from "react";
import { FaHeart, FaRegHeart, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../context/FavoriteContext";
import './Palette.css'

const Palette = ({ palette }) => {
    const { id, name, colors, liked } = palette
    const { favorites, setFavorites } = useContext(FavoriteContext)
    const [isFavorite, setIsFavorite] = useState(liked)

    const handleFavorite = () => {
        setIsFavorite((isFavorite) => !isFavorite)

        // busco si la paleta ya esta en favoritos
        const foundIndex = favorites.findIndex((fav) => fav.id === id)
        // para agregar en favoritos
        if (foundIndex === -1) {
            setFavorites([...favorites, palette])
            return
        }
        // para quitar de favoritos
        setFavorites(
            favorites.filter((fav) => fav.id !== id)
        )
    }

    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value)
    }


    return (
        <div className="palette-container">
            <div className="palette">
                <h3>{name}</h3>
                {colors.map((color, index) => {
                    return (
                        <div
                            key={index}
                            className={`color ${index}`}
                            style={{ backgroundColor: color }}
                            onClick={() => copyToClipboard(color)}
                        >
                            <div className="hex-code">{color}</div>
                        </div>
                    );
                })}
            </div>
            <div className="palette-actions">
                <div className="fav" onClick={handleFavorite}>
                    {isFavorite ? (
                        <FaHeart className='heart'></FaHeart>
                    ) : (
                        <FaRegHeart></FaRegHeart>
                    )}
                </div>
                <Link className="btn-see-more" to={`/palette/${id}`}>
                    ver mas
                </Link>
            </div>

        </div>
    )
}

export default Palette