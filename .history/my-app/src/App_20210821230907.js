import React from 'react'

// Components
import TopBar from './components/TopBar'
import Home from './pages/Home/Home'

// css
import './css/index.css'
import Single from './pages/Single/Single'


function App() {
  return (
    <>
      <TopBar />
      <Home />
      <Single/>
    </>
  );
}

export default App;
