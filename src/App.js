import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/Main';
import DashboardPage from './pages/Dashboard';
import HeroPage from './pages/Hero';
import CardPage from './pages/Card';
import AdminPage from './pages/Admin';
import LoginPage from './pages/SingIn';
import FacebookSignIn from './pages/FacebookSignIn';
import EditCardsPage from './pages/AdminCards';
import EditDashPage from './pages/AdminDashboard';
import { getUser } from './store/thunks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getUser());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <div className="App-cover">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/hero" component={HeroPage} />
            <Route path="/card" component={CardPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/singIn" component={LoginPage} />
            <Route component={FacebookSignIn} path="/facebook-oauth" exact />
            <Route component={EditCardsPage} path="/editCards" />
            <Route component={EditDashPage} path="/editDashboard" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
