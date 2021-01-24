import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';

const App = () => (
        <div>
            <BrowserRouter>
                <div className="container" style={{width: '100%'}}>
                    
                    <Route exact path="/" component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    )

export default App;