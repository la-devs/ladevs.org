import React from 'react';
import * as axios from 'axios';
import '../styles/slack-invite-form.scss';

import { INTERNAL_API, EMAIL_REGEX } from '../utils/constants';
import Button from './button';
import Field from './field';

class SlackInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: null,
      email: "",
      flashMessage: {},
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  validateEmail(e) {
    const email = e.target.value;
    const validEmail = EMAIL_REGEX.test(String(email).toLowerCase()) ? true : false;
    const flashMessage = {};
    this.setState({ validEmail, email, flashMessage });
  }

  sendRequest(e) {
    e.preventDefault();
    const resetState = {
      email: "",
      validEmail: null,
    };
    if(this.state.validEmail) {
      document.getElementById("email").value = "";
      axios.post(`${INTERNAL_API}/invitation_request`, { invite_requested: this.state.email })
        .then(() => {
          this.setState({
            flashMessage: {
              status: "green",
              message: `Request successfully sent to '${this.state.email}'`,
              ...resetState,
            }
          });
        })
        .catch(() => {
          this.setState({
            flashMessage: {
              status: "red",
              message: "Something went wrong. Please try again later.",
              ...resetState,
            }
          });
        });
    }
  }

  render() {
    return (
      <form className="slack-invite-form">
        {this.state.validEmail === false &&
          <span style={{color: 'red', display: 'block'}}>Email is invalid</span>
        }
        <div className="slack-invite-form__input-container">
          <Field
            id="first_name"
            className="slack-invite-form__input"
            type='text'
            name='_first_name'
            placeholder='First name'
            value={this.state.email}
          />
        </div>
        <div className="slack-invite-form__input-container">
          <Field
            id="last_name"
            className="slack-invite-form__input"
            type='text'
            name='_last_name'
            placeholder='Last name'
            value={this.state.email}
          />
        </div>
        <div className="slack-invite-form__input-container">
          <Field
            id="email"
            className="slack-invite-form__input"
            type='email'
            name='_invite_requested'
            placeholder='Email Address'
            value={this.state.email}
            onChange={this.validateEmail}
            error={!this.validateEmail}
          />
        </div>
        <div className="slack-invite-form__submit-container">
          <Button
            size='md'
            disabled={!this.state.validEmail}
            onClick={this.sendRequest}
          >
            Request Invite
          </Button>
        </div>
        {this.state.flashMessage.status &&
          <span style={{color: this.state.flashMessage.status, display: 'block'}}>
            {this.state.flashMessage.message}
          </span>
        }
      </form>
    );
  }
}

export default SlackInviteForm;
