import React from 'react';

import { LA_DEVS_EMAIL, EMAIL_REGEX } from '../utils/constants';
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
    return (
      <form action={`https://formspree.io/${LA_DEVS_EMAIL}`} method='POST'>
        {this.state.validEmail === false &&
          <span style={{color: 'red', display: 'block'}}>Email is invalid</span>
        }
        <Field
          type='email'
          name='_invite_requested'
          placeholder='Email Address'
          onChange={this.validateEmail}
          error={!this.validateEmail}
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
