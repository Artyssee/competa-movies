import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchHistory from './components/SearchHistory';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <br />
      <MovieForm />
      <hr />
      <SearchHistory />
    </Provider>
  );
}

export default App;
