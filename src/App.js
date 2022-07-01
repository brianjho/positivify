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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
