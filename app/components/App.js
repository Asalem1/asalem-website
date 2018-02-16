import React from 'react';
import Contact from './Contact';
import CurrentProjects from './CurrentProjects';
import Footer from './Footer';
import PageHeader from './PageHeader/PageHeader';
// import img from '../assets/images/bg.jpeg';

const App = () => {
  return (
    <div>
      <PageHeader />
      <div className="col-md-12">
        <CurrentProjects />
      </div>
      <br />
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
