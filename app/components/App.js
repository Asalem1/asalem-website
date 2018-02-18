import React from 'react';
import Contact from './Contact';
import CurrentProjects from './CurrentProjects';
import Footer from './Footer';
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
      <div className="col-md-12">
        <CurrentProjects />
      </div>
      <br />
      <div>
        <Testimonials />
      </div>
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
