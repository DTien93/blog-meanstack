import React from 'react'

// Components
import TopBar from './components/TopBar'
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import Write from './pages/Write'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
// css
import './css/index.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}
}

export default App;
