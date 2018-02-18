import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: '',
    };
  }

  componentDidUpdate() {
    if (this.state.success === false || this.state.success === true) {
      const context = this;
      setTimeout(() => context.setState({ success: '' }), 7000);
    }
  }

  sendEmail = (e) => {
    e.preventDefault();
    console.log('e is: ', e);
    // fetch('/send', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     // name,
    //     // email,
    //     // message,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(() => {
    //     this.setState({ success: true });
    //   })
    //   .catch((err) => {
    //     this.setState({ success: false });
    //     throw Error(err);
    //   });
  }

  renderSuccessMessage() {
    if (this.state.success === true) {
      return (
        <div>
          <p>Your email was sent successfully. </p>
        </div>
      );
    } else if (this.state.success === false) {
      return (
        <div>
          <p>Please make sure to fill-in all the input fields. </p>
        </div>
      );
    }
    return <br />;
  }

  render() {
    return (
      <div id="contact" className="container">
        <div className="contact-divide">
          Reach Out
        </div>
        <form
          onSubmit={() => this.sendEmail}
        >
          <div className="row">
            <div className="col-sm-6">
              <TextField
                floatingLabelText="Name"
                required
                rows={4}
                multiLine
                fullWidth
              />
            </div>
            <div className="col-sm-6">
              <TextField
                floatingLabelText="Email"
                required
                rows={4}
                multiLine
                fullWidth
              />
            </div>
          </div>
          <TextField
            floatingLabelText="Message"
            required
            rows={4}
            multiLine
            fullWidth
          />
          <RaisedButton
            label="Send Message"
            type="Submit"
            primary
          />
        </form>
      </div>
    );
  }
}
