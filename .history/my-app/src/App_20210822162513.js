import React from 'react'

// Components
import TopBar from './components/TopBar'
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import Write from './pages/Write'
// css
import './css/index.css'


function App() {
  return (
    <>
      <TopBar />
      <Write/>
    </>
  );
}

export default App;
