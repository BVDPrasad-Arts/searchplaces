// src/App.js
import React from 'react';
import './App.css'; // Import your CSS styles
import SearchPlaces from './Components/SearchPlaces';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Places Application</h1>
      </header>
      <main>
        <SearchPlaces />
      </main>
    </div>
  );
}

export default App;
