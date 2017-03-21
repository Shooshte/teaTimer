import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

import './reset.css';

import Main from './Main';
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';
import Route4 from './Route4';
import Route5 from './Route5';

render(
  (<div>
      <Router history={hashHistory}>
        <Route component={Main} path="/">
          <IndexRoute component={Route1}/>
          <Route component={Route2} path="/route2"/>
          <Route component={Route3} path="/route3"/>
          <Route component={Route4} path="/route4"/>
          <Route component={Route5} path="/route5"/>
        </Route>
      </Router>
    </div>
  ),
  document.querySelector('#root')
);
