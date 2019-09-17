import React from 'react';

import Layout from '../components/layout';
import SlackInviteForm from '../components/slackInviteForm';
import { SEO_TAGS, SEO_TITLES } from '../utils/constants';

const IndexPage = () => (
  <Layout>
    <h1 className='main'>
      Calling All
      Los Angeles-based Developers
    </h1>
    <p>
      We are an inclusive technology community focused on helping each other grow through knowledge sharing and friendships.
    </p>
    <p>
      Want to help build an inclusive, diverse community for LA?
    </p>
    <p className='cta-text'>
      Request an invite to our Slack workspace.
    </p>

    <div style={{backgroundColor: "#fefefe", borderRadius: "10px", padding: "0 20%"}}>
      <SlackInviteForm />
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
