class Navlink extends React.Component {
  render () {
    let {link, linkName} = this.props;
    return (
      <a href="/auth/github">Signup/Login</a>
    );
  }
}

// <a href={link}>{linkName}</a>
