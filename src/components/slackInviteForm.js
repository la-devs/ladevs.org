import React from 'react';

import { LA_DEVS_EMAIL, EMAIL_REGEX } from '../utils/constants';

class SlackInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
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
        />
        <input
          type='submit'
          value='Request Invite'
          disabled={!this.state.validEmail}
          style={{
            pointerEvents: this.state.validEmail ? 'inherit' : 'none',
          }}
        />
      </form>
    );
  }
}

export default SlackInviteForm;
