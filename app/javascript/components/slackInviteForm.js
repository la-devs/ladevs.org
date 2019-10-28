import React from 'react';
import Select from 'react-select';
import * as axios from 'axios';
import '../styles/slack-invite-form.scss';

import { INTERNAL_API, EMAIL_REGEX } from '../utils/constants';
import Button from './button';
import Field from './field';

class SlackInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      validEmail: null,
      email: "",
      occupation: {},
      occupationOptions: [],
      flashMessage: {},
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.occupationChange = this.occupationChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentDidMount() {
    this.setState({
      occupationOptions: [
        { value: "developer", label: "Developer" },
        { value: "designer", label: "Designer" },
        { value: "recruiter", label: "Recruiter" },
        { value: "project_manager", label: "Project/ Product Manager" },
        { value: "other", label: "Other" },
      ],
    })
  }

  validateEmail(e) {
    const email = e.target.value;
    const validEmail = EMAIL_REGEX.test(String(email).toLowerCase()) ? true : false;
    const flashMessage = {};
    this.setState({ validEmail, email, flashMessage });
  }

  occupationChange(occupation) {
    this.setState({ occupation });
  }

  inputChange(e, input) {
    const newState = {...this.state};
    newState[input] = e.target.value;
    this.setState({...newState});
  }

  sendRequest(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      occupation,
      validEmail,
    } = this.state;
    const resetState = {
      email: "",
      validEmail: null,
      firstName: "",
      lastName: "",
      occupation: {},
    };
    if((validEmail && firstName && lastName && occupation)) {
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";
      document.getElementById("email").value = "";
      axios.post(`${INTERNAL_API}/invitation_request`, {
        email,
        first_name: firstName,
        last_name: lastName,
        occupation: occupation.value,
      })
        .then(() => {
          this.setState({
            flashMessage: {
              status: "green",
              message: "Request successfully sent!",
            },
            ...resetState,
          });
        })
        .catch(() => {
          this.setState({
            flashMessage: {
              status: "red",
              message: "Something went wrong. Please try again later.",
            },
            ...resetState,
          });
        });
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      occupation,
      occupationOptions,
      validEmail,
      flashMessage,
    } = this.state;

    return (
      <form className="slack-invite-form">
        <div className="slack-invite-form__input-container">
          <Field
            id="first_name"
            className="slack-invite-form__input"
            type='text'
            name='_first_name'
            placeholder='First name'
            onChange={e => this.inputChange(e, "firstName")}
            value={firstName}
          />
        </div>
        <div className="slack-invite-form__input-container">
          <Field
            id="last_name"
            className="slack-invite-form__input"
            type='text'
            name='_last_name'
            placeholder='Last name'
            onChange={e => this.inputChange(e, "lastName")}
            value={lastName}
          />
        </div>
        <div className="slack-invite-form__input-container">
          <Field
            id="email"
            className="slack-invite-form__input"
            type='email'
            name='_invite_requested'
            placeholder='Email address'
            value={email}
            onChange={this.validateEmail}
            error={!this.validateEmail}
          />
        </div>
        {this.state.validEmail === false &&
          <span style={{color: 'red', display: 'block'}}>Email is invalid</span>
        }
        <div className="slack-invite-form__input-container">
          <Select
            id="occupation"
            value={!!Object.keys(occupation).length ? occupation : ""}
            onChange={this.occupationChange}
            options={occupationOptions}
            placeholder="Select your role..."
            className="slack-invite-form__select"
          />
        </div>
        <div className="slack-invite-form__agree-terms-container">
          <p className="slack-invite-form__agree-terms-text">
            By requesting an invite to LA Devs, you confirm that you are living in,
            or planning to move to, the southern California region. You also agree that you will
            follow our <a href="https://github.com/la-devs/ladevs.org/blob/dev/CODE_OF_CONDUCT.md" target="_blank">
            Code of Conduct</a>.
          </p>
        </div>
        <div className="slack-invite-form__submit-container">
          <Button
            size='md'
            disabled={!(validEmail && firstName && lastName && occupation)}
            onClick={this.sendRequest}
          >
            Request Invite
          </Button>
        </div>
        {flashMessage.status &&
          <span style={{color: flashMessage.status, display: 'block'}}>
            {flashMessage.message}
          </span>
        }
      </form>
    );
  }
}

export default SlackInviteForm;
