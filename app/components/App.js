import React from 'react';
import Contact from './Contact';
import CurrentProjects from './CurrentProjects';
import PageHeader from './PageHeader/PageHeader';
import About from './About';
import Testimonials from './Testimonials';

const App = () => {
  return (
    <div>
      <PageHeader />
      <div>
        <About />
      </div>
      <div>
        <CurrentProjects />
      </div>
      <br />
      <div>
        <Testimonials />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
