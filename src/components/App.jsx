import React from 'react';
import './App.css';
import Gif from './Gif';
import GifList from './GifList';
import Search from './Search';

const App = () => {
  return (
    <div className="app">
      <div className="left-scene">
        <input className="form-search" />
        <div className="selected-gif">
        THE SELECTED GIF HERE
        </div>
      </div>

      <div className="right-scene">
        <GifList />
      </div>
    </div>
  )
}

export default App;
