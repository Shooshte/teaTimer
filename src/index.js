import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

import { Provider } from 'mobx-react';
import TimerStore from './Stores/timerStore';

import './reset.css';

import Main from './Main/Main.component';
import Tea from './Tea/Tea.component';
import About from './About/About.component';
import Timer from './Timer/Timer.component';

const timerStore = new TimerStore()

render(
  (<Provider timerStore={timerStore}>
      <Router history={hashHistory}>
        <Route component={Main} path="/">
          <IndexRoute component={Tea}/>
          <Route component={About} path="/about"/>
          <Route component={Timer} path="/timer"/>
        </Route>
      </Router>
    </Provider>
  ),
  document.querySelector('#root')
);
