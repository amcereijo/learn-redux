import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create on  object for the default data
const defautState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defautState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;