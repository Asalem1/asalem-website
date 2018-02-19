import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import Contact from './Contact';
import CurrentProjects from './CurrentProjects';
import PageHeader from './PageHeader/PageHeader';
import About from './About';
import Testimonials from './Testimonials';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }

  toggleDialog = (bool) => {
    this.setState({ success: bool });
  };

  renderDialog = () => (
    <Dialog
      title="Success!"
      titleStyle={{
        fontFamily: 'Roboto Slab',
        letterSpacing: '1px',
        fontWeight: 800,
        fontSize: '25px',
      }}
      open={this.state.success}
      actions={
        <RaisedButton
          label="Click Party Happening Here"
          secondary
          onClick={() => this.toggleDialog(false)}
          labelStyle={{
            fontFamily: 'Quicksand',
            fontWeight: 800,
            letterSpacing: '1.5px',
          }}
        />
      }
      onRequestClose={() => this.toggleDialog(false)}
    >
      <span className="dialog-text">
        Thanks to the miracle of technology your email as gone
        through! Unfortunately, I&apos;m still human so it may take
        me a day or two to get back to you, but keep your eyes peeled!
        Thanks for reaching out!
      </span>
    </Dialog>
  );

  render() {
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
          <Contact
            toggleDialog={this.toggleDialog}
          />
        </div>
        {this.renderDialog()}
      </div>
    );
  }
}
