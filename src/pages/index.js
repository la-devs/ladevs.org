import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SlackInviteForm from '../components/slackInviteForm';

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <h1>Under Construction</h1>
      <h4>A new home for software developers in Los Angeles is being built</h4>
      <p>
        Want to help us buid a community focused on helping each other connect, have fun with technology, make friends, and so much more?<br />
        Request an invite to our Slack workspace.
      </p>

      <SlackInviteForm />

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </Container>
  </Layout>
)

export default IndexPage
