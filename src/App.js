import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ViewDashPage from 'pages/DashboardView';
import HomePage from 'pages/Main';
import DashboardPage from 'pages/Dashboard';
import HeroPage from 'pages/Hero';
import CardPage from 'pages/Card';
import AdminPage from 'pages/Admin';
import LoginPage from 'pages/SingIn';
import FacebookSignIn from 'pages/FacebookSignIn';
import GoogleSignIn from 'pages/GoogleSignIn';
import EditCardsPage from 'pages/AdminCards';
import EditDashPage from 'pages/DashboardEdit';
import EditUserPage from 'pages/UsersEdit';
import EditGamePage from 'pages/GameEdit';
import ViewGamePage from 'pages/GamesView';
import CommentsPage from 'pages/Comment';
import PresentationPage from 'pages/Presentation';
import GamePage from 'pages/Game';
import { getUser } from 'store/thunks';

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
            <Route component={GoogleSignIn} path="/google-oauth" exact />
            <Route component={EditCardsPage} path="/editCards" />
            <Route component={EditDashPage} path="/editDashboard" />
            <Route component={ViewDashPage} path="/viewDashboard" />
            <Route component={EditUserPage} path="/editUsers" />
            <Route component={EditGamePage} path="/editGames" />
            <Route component={ViewGamePage} path="/viewGames" />
            <Route component={CommentsPage} path="/comments" />
            <Route component={PresentationPage} path="/presentation" />
            <Route component={GamePage} path="/game" />



          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
