import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ColorPalettesContext } from '../../context/ColorPalettesContext';
import './PaletteDisplay.css'

const PaletteDisplay = () => {
    const { id } = useParams();
    const { colorPalettes } = useContext(ColorPalettesContext)
    const [palette] = colorPalettes.filter(
        (palette) => palette.id === Number(id)
    );

    return (
        <div className='palette-display-container'>
            <div className='palette-display-card'>
                <div className='palette-data'>
                    <span>id: {palette.id}</span>
                    <span>nombre: {palette.name}</span>
                    <span>Tags: {palette.tags.join(' - ')}</span>
                </div>
                <div>
                    {palette.colors.map((color) => {
                        return (
                            <div
                                key={color}
                                className='color'
                                style={{ backgroundColor: color }}
                            >
                                <span>{color}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link className='btn-back' to='/'>
                volver al inicio
            </Link>
        </div>
    )
}

export default PaletteDisplay