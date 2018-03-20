import React, { Component } from 'react';
import RevelStudioTools from './RevelStudioTools'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import reducers from './reducers'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

// const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      // <Provider store={ store }>
        <RevelStudioTools />
      // </Provider>
    );
  }
}

export default App;
