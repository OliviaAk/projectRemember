import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import DashboardPage from './pages/Dashboard'
import HeroPage from './pages/Hero'
import HistoryPage from './pages/History'
import DayPage from './pages/Day'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/heroes' component={DashboardPage}/>
        <Route path='/person' component={HeroPage}/>
        <Route path='/resources' component={HistoryPage}/>
        <Route path='/day' component={DayPage}/>



      </Switch>
    </Router>
  );
}

export default App;
