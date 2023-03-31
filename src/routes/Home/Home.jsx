import { useContext, useEffect, useState } from 'react'
import Favorites from '../../components/Favorite/Favorites'
import Palettes from '../../components/Palette/Palettes'
import Tags from '../../components/Tag/Tags'
import { ColorPalettesContext } from '../../context/ColorPalettesContext'
import { FavoriteContext } from '../../context/FavoriteContext'
import { FiltersContext } from '../../context/FiltersContext'
import { getTags } from '../../service'
import './Home.css'

const Home = () => {
    const { colorPalettes } = useContext(ColorPalettesContext);
    const { favorites } = useContext(FavoriteContext);
    const { filters } = useContext(FiltersContext);

    const filteredColorPalettes = colorPalettes.filter((colorPalette) => {
        // si no hay filtro por tag entonces devolver todos
        if (filters.tagFilter.length === 0) {
            return true
        }

        const verifiedTags = colorPalette.tags.filter((tag) =>
            filters.tagFilter.includes(tag)
        );
        return verifiedTags.length === filters.tagFilter.length
    })

    const colorPaletteWithLikes = filteredColorPalettes.map((palette) => {
        const foundIndex = favorites.findIndex((fav) => fav.id === palette.id)

        // la paleta no esta marcada como favorita, entonces se la devuelve sin cambios
        if (foundIndex === -1) {
            return palette
        }

        return { ...palette, liked: true }
    })

    return (
        <>
            <div className='main-container'>
                <Tags></Tags>
                <Palettes palettes={colorPaletteWithLikes}></Palettes>
                <Favorites></Favorites>
            </div>
        </>
    )

}
export default Home