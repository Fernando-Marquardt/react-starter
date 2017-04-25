import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from '../Hello';
import Another from '../Another';

const App = () => (
    <Router>
        <div className="app">
            <ul>
                <li><Link to="/">Hello</Link></li>
                <li><Link to="/another">Another View</Link></li>
            </ul>

            <Route exact path="/" component={Hello} />
            <Route exact path="/another" component={Another} />
        </div>
    </Router>
);

export default App;
