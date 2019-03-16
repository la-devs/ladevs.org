import React from 'react'

import constants from '../utils/constants';

class SlackInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
    };
  }

  render () {
    return (
      <form action={`https://formspree.io/${constants.LA_DEVS_EMAIL}`} method='POST'>
        <input type='email' name='_invte_requested' placeholder='Email Address' />
        <input type='submit' value='Request Invite' />
      </form>
    );
  }
}

export default SlackInviteForm;
