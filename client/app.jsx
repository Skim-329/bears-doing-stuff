import React from 'react';
import Home from './pages/Homepage/home';
import About from './pages/About/about';
import Inspiration from './pages/Inspiration/inspiration';
import Sketchbook from './pages/Sketchbook/sketchbook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function PageNotFound() {
  return <div>Page Not Found</div>;
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/sketchbook" element={<Sketchbook />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }
}
