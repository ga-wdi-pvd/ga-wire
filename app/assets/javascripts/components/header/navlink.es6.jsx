class Navlink extends React.Component {
  render () {
    let {link, style} = this.props;
    return (
      <span className="helper">
        <a className="nav-link" href="/auth/github">
          <h4>Login/Signup</h4>
          <i className="fa fa-sign-in"></i>
        </a>
      </span>
    );
  }
}
