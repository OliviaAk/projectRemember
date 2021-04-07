import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import DashboardPage from './pages/Dashboard'
import HeroPage from './pages/Hero'
import CardPage from './pages/Card'
import AdminPage from "./pages/Admin";
import LoginPage from './pages/SingIn'
function App() {
  return (
    <div className='App'>
      <div className='App-cover'>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
         <Route path='/dashboard' component={DashboardPage}/>
        <Route path='/hero' component={HeroPage}/>
        <Route path='/card' component={CardPage}/>
        <Route path='/admin' component={AdminPage}/> 
        <Route path='/singIn' component={LoginPage}/>
      </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;
