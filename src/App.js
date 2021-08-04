import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid custome_size">
        <Navbar />
        <Footer />
      </div>
    );
  }

}

export default App;