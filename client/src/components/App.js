import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import Confident from './pages/Confident';
import Contacts from './pages/Contacts';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => (
        <div>
            <BrowserRouter>
                <div className="container" style={{width: '100%'}}>
                    
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/confident" component={Confident}/>
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
                </div>
            </BrowserRouter>
        </div>
    )

export default App;