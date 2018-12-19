import React, { Component } from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
