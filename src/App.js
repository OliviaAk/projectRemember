import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import DashboardPage from './pages/Dashboard'
import HeroPage from './pages/Hero'
import CardPage from './pages/Card'
import CardPresent from './components/ModalCard/'
import AdminPage from "./pages/Admin";
function App() {
  return (
    <div className='App'>
      <div className='App-cover'>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
         <Route path='/dashboard' component={DashboardPage}/>
       {/* <Route path='/person' component={HeroPage}/>
        <Route path='/add' component={CardPage}/>
        <Route path='/userCard' component={CardPresent}/>
        <Route path='/admin' component={AdminPage}/> */}
      </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;
