import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import DashboardPage from './pages/Dashboard'
import HeroPage from './pages/Hero'
import HistoryPage from './pages/History'
import DayPage from './pages/Day'
import AddPage from './pages/Add'
import AuthPage from './pages/Auth'
import AdminPage  from './pages/Admin'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/heroes' component={DashboardPage}/>
        <Route path='/person' component={HeroPage}/>
        <Route path='/resources' component={HistoryPage}/>
        <Route path='/day' component={DayPage}/>
        <Route path='/add' component={AddPage}/>
        <Route path='/facebook-oauth' component={AuthPage}/>
        <Route path='/admin' component={AdminPage}/>




      </Switch>
    </Router>
  );
}

export default App;
