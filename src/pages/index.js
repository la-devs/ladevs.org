import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SlackInviteForm from '../components/slackInviteForm';
import { SEO_TAGS, SEO_TITLES } from '../utils/constants';

const IndexPage = () => (
  <Layout>
    <SEO title={SEO_TITLES.homepage} keywords={SEO_TAGS} />
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

    <SlackInviteForm />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
