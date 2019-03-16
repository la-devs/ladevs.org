import React from "react"

const SlackInviteForm = () => (
  <form action="https://formspree.io/info@ladevs.org" method="POST">
    <input type="email" name="_invte_requested" placeholder="Email Address" />
    <input type="submit" value="Request Invite" />
  </form>
);

export default SlackInviteForm;
