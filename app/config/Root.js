import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog/Blog';
import App from '../components/App';
import Footer from '../components/Footer';

export function RootClass() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Route exact path="/" component={App} />
          <Route path="/blog" component={Blog} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default RootClass;
