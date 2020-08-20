import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => (
    <div class="navbar-fixed">
        <nav>
            <div className="nav-wrapper yellow darken-4">
            <Link to={'/'} className="brand-logo" style={{marginTop: 10, marginLeft: 10, fontSize: 90, color: 'white'}}>Confident <a style={{fontWeight: 900, color: 'white', fontSize: 80}}>✌</a></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="text" ><Link to={'/about'}>¿Qué es Confident?</Link></li>
                <li style={{marginTop: -2, fontSize: 35, fontWeight: 'lighter'}}>|</li>
                <li className="text"><Link to={'/shop'}>Contactos</Link></li>
                <li style={{marginTop: -2, fontSize: 35, fontWeight: 'lighter'}}>|</li>
                <li className="text"><Link to={'/'}>Aviso de Privasidad</Link></li>
            </ul>
            </div>
        </nav>
    </div>    
    )

export default Header;