import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ColorPalettesContext } from './context/ColorPalettesContext';
import Home from './routes/Home/Home';
import PaletteDisplay from './routes/Palette/PaletteDisplay';
import { getColorPalettes } from './service';
import Navigation from './routes/Navigation/Navigation.jsx'
import PaletteCreation from './routes/Palette/PaletteCreation';
import Login from './routes/Login/Login.jsx'


function App() {
  const { setColorPalettes } = useContext(ColorPalettesContext)

  useEffect(() => {
    getColorPalettes()
      .then((data) => {
        setColorPalettes(data);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation></Navigation>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='/palette/:id' element={<PaletteDisplay></PaletteDisplay>}></Route>
          <Route path='palette/create' element={<PaletteCreation></PaletteCreation>}></Route>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
