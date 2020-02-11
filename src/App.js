import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


import Posts from './components/Posts';
import PostsForm  from './components/PostsForm';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <h1 className='App-title'>Welcome To React</h1>
        </header>
        <PostsForm/>
        <hr/>
        <Posts/>;
    </div>
    </Provider>
  );
}

export default App;
