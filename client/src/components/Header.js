import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import {MediaMatcher, MediaServerRender} from 'react-media-match'

const Header = () => (
    

        <div>
        <MediaServerRender predicted="desktop" hydrated>
        <MediaMatcher
            mobile=
            {<div class="navbar-fixed">
            <nav>
                <div className="nav-wrapper yellow darken-4" style={{position:'realtive'}}>
                <Link to={'/'} className="brand-logo" style={{marginTop: 10, marginLeft: '-25%', fontSize: 60, color: 'white'}}>C<a style={{fontWeight: 900, color: 'white', fontSize: 20}}>onfident</a><a style={{fontWeight: 900, color: 'white', fontSize: 40}}>&#x270C;</a></Link>
                
                <div style={{position:'absolute', right:15}}>
                <Link to={'/confident'} style={{display:'inline-block', fontSize:25}}>&#127968;</Link>
                <p style={{display:'inline-block', marginRight:10, marginLeft:10, marginTop: -2, fontSize: 25, fontWeight: 'lighter'}}>|</p>
                <Link to={'/contacts'} style={{display:'inline-block', fontSize:25}}>&#128222;</Link>
                <p style={{display:'inline-block', marginRight:10, marginLeft:10, marginTop: -2, fontSize: 25, fontWeight: 'lighter'}}>|</p>
                <Link to={'/privacyPolicy'} style={{display:'inline-block', fontSize:25}}>&#128227;</Link>
                </div>

                </div>
                
            </nav>
            </div>} 

            tablet=
            {<div class="navbar-fixed">
            <nav>
                <div className="nav-wrapper yellow darken-4" style={{position:'realtive'}}>
                <Link to={'/'} className="brand-logo" style={{marginTop: 10, marginLeft: -200, fontSize: 80, color: 'white'}}>Confident <a style={{fontWeight: 900, color: 'white', fontSize: 70}}>&#x270C;</a></Link>
                
                <div style={{position:'absolute', right:15}}>
                <Link to={'/confident'} style={{display:'inline-block'}}>¿Qué es Confident?</Link>
                <p style={{display:'inline-block', marginRight:4, marginLeft:4, marginTop: -2, fontSize: 25, fontWeight: 'lighter'}}>|</p>
                <Link to={'/contacts'} style={{display:'inline-block'}}>Contactos</Link>
                <p style={{display:'inline-block', marginRight:4, marginLeft:4, marginTop: -2, fontSize: 25, fontWeight: 'lighter'}}>|</p>
                <Link to={'/privacyPolicy'} style={{display:'inline-block'}}>Aviso de Privasidad</Link>
                </div>

                </div>
            </nav>
            </div>} 
            
            desktop=
            {<div class="navbar-fixed">
            <nav>
                <div className="nav-wrapper yellow darken-4">
                <Link to={'/'} className="brand-logo" style={{marginTop: 10, marginLeft: 10, fontSize: 90, color: 'white'}}>Confident <a style={{fontWeight: 900, color: 'white', fontSize: 80}}>&#x270C;</a></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className="text" ><Link to={'/confident'}>¿Qué es Confident?</Link></li>
                    <li style={{marginTop: -2, fontSize: 35, fontWeight: 'lighter'}}>|</li>
                    <li className="text"><Link to={'/contacts'}>Contactos</Link></li>
                    <li style={{marginTop: -2, fontSize: 35, fontWeight: 'lighter'}}>|</li>
                    <li className="text"><Link to={'/privacyPolicy'}>Aviso de Privasidad</Link></li>
                </ul>
                </div>
            </nav>
            </div>}
            />
       </MediaServerRender>
        </div>

        

    )

export default Header;