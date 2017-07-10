import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Landing/Landing';
 import App from './containers/App/App';
 import NotesBoard from './containers/Board/Board';
// import Tag from './containers/Project/routes/Tag/Tag';
// import Contact from './containers/Contact/ContactContainer';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={App}/>
    <Route path = "/home" component = {Home} />
    <Route path = "board" component = {NotesBoard} />
  </Route>
);
