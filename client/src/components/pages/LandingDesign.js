import React, { Component } from 'react';
import Chatbot from '../chatbot/Chatbot';
import Header from '../Header';
import BI from '../images/4.gif';

class LandingDesign extends Component {


    render() {
        return (
            <div style={{float: 'center', position: 'fixed', overflow: 'auto', top: 0, left: 0, bottom: 0, right: 0, backgroundImage:`url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
            <div style={{float: 'center', position: 'absolute'}}>
                <Header/>
            </div>
            <div >
                <Chatbot />
            </div>
            </div>
        )
    }
}

export default LandingDesign;