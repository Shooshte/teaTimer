import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

import './reset.css';

import Main from './Main';
import Tea from './Tea.component';
import Route2 from './Route2';
import Route3 from './Route3';

render(
  (<div>
      <Router history={hashHistory}>
        <Route component={Main} path="/">
          <IndexRoute component={Tea}/>
          <Route component={Route2} path="/about"/>
          <Route component={Route3} path="/timer"/>
        </Route>
      </Router>
    </div>
  ),
  document.querySelector('#root')
);
