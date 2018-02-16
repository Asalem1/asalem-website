import React, { Component } from 'react';

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

  checkInputs = (event) => {
    event.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    if (!name.length || !email.length || !message.length) {
      this.setState({ success: false });
    } else {
      this.sendEmail(name, email, message);
      this.name.value = '';
      this.email.value = '';
      this.message.value = '';
    }
  }

  sendEmail = (name, email, message) => {
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
        this.setState({ success: true });
      })
      .catch((err) => {
        this.setState({ success: false });
        throw Error(err);
      });
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
      <div id="contact" className="contact">
        <section>
          <header>
            <p className="contact-header">Reach Out</p>
          </header>
          <hr />
          <form onSubmit={() => this.checkInputs} className="form-styling">
            <div>
              <div className="row">
                <div className="col-sm-5">
                  <label className="contact-label" htmlFor="name">
                    Name&nbsp;
                    <input className="contact-container" type="text" name="name" ref={(c) => { this.name = c; }} />
                  </label>
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <label className="contact-label" htmlFor="email">
                    Email&nbsp;
                    <input className="contact-container" type="text" name="email" ref={(c) => { this.email = c; }} />
                  </label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-5">
                  <label className="contact-label" htmlFor="message">
                    Message&nbsp;
                    <textarea className="contact-container col-sm-12" name="message" rows="10" ref={(c) => { this.message = c; }} />
                  </label>
                </div>
                <div className="row send-message">
                  <button type="submit" className="send-message-button"> Send Message </button>
                </div>
              </div>
              <br />
            </div>
          </form>
          <div>
            {this.renderSuccessMessage()}
          </div>
        </section>
      </div>
    );
  }
}
