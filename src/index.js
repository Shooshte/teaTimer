import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

// Components
import Main from './components/core/Main.component';
import NotFound from './components/core/NotFound.component';
import About from './components/About/About.component';
import Landing from './components/Landing.component';
import Tea from './components/Tea/Tea.component';

//Stylesheets
import './assets/styles/vendor/Reset.css';

render(
  (<div>
      <Router history={hashHistory}>
        <Route component={Main} path="/">
          <IndexRoute component={Tea}/>
          <Route component={About} path="/about"/>
          <Route component={Landing} path="/timer"/>
        </Route>
        <Route component={NotFound} path="*"/>
      </Router>
    </div>
  ),
  document.querySelector('#root')
);
