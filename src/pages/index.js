import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SlackInviteForm from "../components/slackInviteForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Under Construction</h1>
    <h4>A new home for software developers is being built</h4>
    <p>
      Want to help us buid a community focused on helping each other connect, have fun with technolyo, make friends, and so much more?<br />
      Request an invite to our Slack workspace.
    </p>

    <SlackInviteForm />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
