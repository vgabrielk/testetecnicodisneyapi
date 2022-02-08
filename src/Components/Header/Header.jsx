
import React, { useState } from 'react';
import './Header.css'

const Header = () => {


    const [menu, setMenu] = useState(false)

    const toogleMenu = () =>{
        setMenu(!menu)
    }
    const closeMenu = () =>{
        setMenu(!menu)
    }
    return (
        <>
                <div className="menu">
                    <button onClick={toogleMenu}>
                    <i className="fas fa-bars"></i>
                    </button>
                    {menu ? 
                    <div className="menu-opened">
                        <button onClick={closeMenu}>
                        <i className="fas fa-close"></i>
                        </button>
                        <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href='/'>Personagens</a></li>
                </ul>
                        
                    </div>
                    : null  
                }
                </div>
            <header className="header">
                
                <nav className='header-nav'>
                    <img className='header-logo' width='180px' src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg" alt="" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Personagens</a></li>
                </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;