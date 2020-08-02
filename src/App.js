import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="container">
      <Header/>
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
