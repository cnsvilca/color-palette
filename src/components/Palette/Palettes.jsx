import Palette from "./Palette";
import './Palettes.css'

const Palettes = ({ palettes }) => {
    return (
        <div className='grid'>
            {palettes.map((palette) => (
                <Palette key={palette.id} palette={palette}></Palette>
            ))}
        </div>
    )
}
export default Palettes;