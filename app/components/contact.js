import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, TextField } from 'material-ui';

const labelStyle = {
  top: '7px',
  fontFamily: 'Roboto Slab',
  fontWeight: 800,
  fontSize: '20px',
};

const inputStyle = {
  fontFamily: 'Roboto Slab',
  fontWeight: 800,
  bottom: '30px',
  fontSize: '20px',
};

export default class Contact extends Component {
  static propTypes = {
    toggleDialog: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  sendEmail = (event) => {
    event.preventDefault();
    const { toggleDialog } = this.props;
    const { name, email, message } = this.state;
    fetch('/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          name: '',
          email: '',
          message: '',
        });
        toggleDialog(true);
      })
      .catch((err) => {
        toggleDialog(false);
        throw Error(err);
      });
  }

  handleName = (e, v) => {
    e.preventDefault();
    this.setState({ name: v });
  };

  handleEmail = (e, v) => {
    e.preventDefault();
    this.setState({ email: v });
  };

  handleMessage = (e, v) => {
    e.preventDefault();
    this.setState({ message: v });
  };

  render() {
    return (
      <div id="contact" className="container">
        <div className="contact-divide">
          Reach Out
        </div>
        <form
          onSubmit={this.sendEmail}
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
                value={this.state.name}
                onChange={this.handleName}
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
                value={this.state.email}
                onChange={this.handleEmail}
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
            value={this.state.message}
            onChange={this.handleMessage}
          />
          <RaisedButton
            label="Send Message"
            type="Submit"
            fullWidth
            primary
            labelStyle={{
              fontFamily: 'Roboto Slab',
              fontWeight: 800,
              letterSpacing: '1.5px',
              fontSize: '20px',
              lineHeight: '65px',
            }}
            style={{
              height: '65px',
              marginBottom: '40px',
            }}
          />
        </form>
      </div>
    );
  }
}
