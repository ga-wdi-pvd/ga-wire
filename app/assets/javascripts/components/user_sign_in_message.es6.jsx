class UserSignInMessage extends React.Component {
  render () {
    return (
    <div>
    <h3>You must be signed in to submit a post.</h3>
    <p><a href="/auth/github">Click here to sign in</a></p>
    <p><a href="/">Or return home</a></p>
    </div>
    );
  }
}
