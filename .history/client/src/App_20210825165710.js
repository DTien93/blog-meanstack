import React from 'react'
import { Context } from './context/Context'
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
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';


function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
