import React from 'react';
import MainComponent from './Components/MainComponent'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
          <MainComponent />
      </Router>
    </>
  );
}

export default App;
