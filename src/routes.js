import React from 'react';
import { Route, IndexRoute } from 'react-router';

 import App from './containers/App/App';
// import Tag from './containers/Project/routes/Tag/Tag';
// import Contact from './containers/Contact/ContactContainer';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={App}/>
  </Route>
);
