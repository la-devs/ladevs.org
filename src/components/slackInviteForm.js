import React from 'react';

import { LA_DEVS_EMAIL, EMAIL_REGEX } from '../utils/constants';

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
        <input
          type='email'
          name='_invite_requested'
          placeholder='Email Address'
          onChange={this.validateEmail}
          style={{
            border: this.state.validEmail === false ? '1px solid red' : '',
          }}
        />
        <input
          type='submit'
          value='Request Invite'
          disabled={!this.state.validEmail}
          style={{
            pointerEvents: this.state.validEmail ? 'inherit' : 'none',
          }}
        />
        {this.state.validEmail === false &&
          <span style={{color: 'red'}}>Email is invalid</span>
        }
      </form>
    );
  }
}

export default SlackInviteForm;
