import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SlackInviteForm from "../components/slackInviteForm"
import { SEO_TAGS, SEO_TITLES } from '../utils/constants';

const IndexPage = () => (
  <Layout>
    <SEO title={SEO_TITLES.homepage} keywords={SEO_TAGS} />
    <h1>Under Construction</h1>
    <h4>A new home for Los Angeles based software developers is being built</h4>
    <p>
      Want to help us buid an inclusive community focused on helping each other connect, having fun with technology, making friends, and so much more?<br />
      Request an invite to our Slack workspace.
    </p>

    <SlackInviteForm />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
