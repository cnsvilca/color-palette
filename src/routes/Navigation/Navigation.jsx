import { useContext, useEffect } from 'react'
import {UserContext} from '../../context/UserContext'
import './Navigation.css'
import {Link, Outlet} from 'react-router-dom'
import palettoLogo from '../../assets/logo.png'

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    useEffect(() =>{
        const userStored = localStorage.getItem('currentUser')
        console.log({userStored})
        if (userStored) {
            setCurrentUser(JSON.parse(userStored))
        }
    },[])

    const handleSignOut = () => {
        setCurrentUser(null);
        localStorage.setItem('currentUser' , null)
    };

    return(
        <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <img src={palettoLogo} alt='Logo' className='logo'></img>
            </Link>
            <div className='nav-links-container'>
                {currentUser ? (
                    <Link className='nav-link' to='/palette/create'>
                        Nueva Paleta
                    </Link>
                ):(
                    <span className='nav-link' style={{color:'red'}}>Nueva Paleta</span>
                )}
                {currentUser ? (
                    <span className='nav-link' onClick={handleSignOut}>
                        Cerrar Sesion
                    </span>
                ):(
                    <Link className='nav-link sign-in' to='/login'>
                        Iniciar Sesion
                    </Link>
                )}
            </div>
        </div>
        <Outlet></Outlet>
        </>
    )
}

export default Navigation;