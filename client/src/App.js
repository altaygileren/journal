import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import Dashboard from './components/dashboard/Dashboard';
import { clearCurrentDashboard } from './actions/dashboardActions';
import Posts from './components/posts/Posts';
import Create from './components/posts/Create';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentDashboard());
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <div>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/feed" component={Posts} />
              <Route exact path="/writestory" component={Create} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
