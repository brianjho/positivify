import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Results from './components/Results';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="positivify" element={<Home />} />
            <Route path="positivify/results" element={<Results />} />
            <Route path="positivify/about" element={<About />} />
            <Route path="positivify/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer>
            <p>Developed by Brian Ho | <a href="/positivify">Home</a> | <a href="/positivify/results">Results</a> | <a href="/positivify/about">About</a> | <a href="/positivify/contact">Contact</a> | <a href="/positivify/about">About</a> | 2022</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
