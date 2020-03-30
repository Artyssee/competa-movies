import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieForm from './components/MovieForm';
import SearchResults from './components/SearchResults';
import SearchHistory from './components/SearchHistory';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <br />
      <FavoriteMovies />
      <hr />
      <MovieForm />
      <hr />
      <SearchHistory />
      <hr />
      <SearchResults />
    </Provider>
  );
}

export default App;
