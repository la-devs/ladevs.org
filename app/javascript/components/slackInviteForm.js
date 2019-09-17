import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { INTERNAL_API, EMAIL_REGEX } from '../utils/constants';
import Button from './button';
import Field from './field';

class SlackInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: null,
    };
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(e) {
    const validEmail = EMAIL_REGEX.test(String(e.target.value).toLowerCase()) ? true : false;
    this.setState({ validEmail });
  }

  render() {
    const jobDescriptionOptions = [
      'Full-stack Developer',
      'Front-end Developer',
      'Back-end Developer',
      'Designer/UX Developer',
      'Site Reliability Engineer',
      'Operations/IT',
      'Recruiter',
      'Student',
      'Other'
    ];
    return (
      <form action={`${INTERNAL_API}/invitation_request`} method='POST'>
        {this.state.validEmail === false &&
          <span style={{color: 'red', display: 'block'}}>Email is invalid</span>
        }
        <label>
          Email Address
        </label>
        <FontAwesomeIcon icon={faEnvelope} />
        <Field
          type='email'
          name='email'
          placeholder='Your email'
          onChange={this.validateEmail}
          error={!this.validateEmail}
        />
        <Dropdown
          name='residence_status'
          options={jobDescriptionOptions}
          placeholder='Do you live in or around Los Angeles?'
        />
        <Dropdown
          name='job_description'
          options={jobDescriptionOptions}
          placeholder='What do you do?' />
        <textarea
          name='fun_facts'
          placeholder='What would you like to get out of LADevs? (optional)'
        />
        <Button
          buttonType='submit'
          size='md'
          disabled={!this.state.validEmail}
        >
          Request Invite
        </Button>
      </form>
    );
  }
}

export default SlackInviteForm;
