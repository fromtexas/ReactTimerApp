var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var css = require('./style.scss');
var foundation = require('../node_modules/foundation-sites/dist/css/foundation.min.css');

 
ReactDOM.render(
    <Router history = {hashHistory}>
       <Route path ='/' component={Main}>
        <IndexRoute component={Timer}/>
        <Route path='countdown' component={Countdown}/>
       </Route> 
    </Router>,
          document.getElementById('app')
      ); 
