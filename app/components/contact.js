import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

const labelStyle = {
  top: '7px',
  fontFamily: 'Roboto Slab',
  fontWeight: 800,
};

const inputStyle = {
  fontFamily: 'Roboto Slab',
  fontWeight: 800,
  bottom: '30px',
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: '',
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
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
                inputStyle={inputStyle}
                floatingLabelText="Name"
                floatingLabelStyle={labelStyle}
                type="text"
                required
                fullWidth
              />
            </div>
            <div className="col-sm-6">
              <TextField
                inputStyle={inputStyle}
                floatingLabelStyle={labelStyle}
                type="text"
                floatingLabelText="Email"
                required
                fullWidth
              />
            </div>
          </div>
          <TextField
            floatingLabelText="Message"
            textareaStyle={inputStyle}
            floatingLabelStyle={labelStyle}
            required
            multiLine
            rowsMax={4}
            fullWidth
          />
          <RaisedButton
            label="Send Message"
            type="Submit"
            primary
            labelStyle={{
              fontFamily: 'Roboto Slab',
              fontWeight: 800,
              letterSpacing: '1.5px',
            }}
            style={{ marginBottom: '40px' }}
          />
        </form>
      </div>
    );
  }
}
