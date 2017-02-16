class Navlink extends React.Component {
  render () {
    let {link, style} = this.props;
    return (
      <span className="helper">
        <a className="nav-link" href="/auth/github">
          <i className="fa fa-sign-in"> Login/Signup</i>
        </a>
      </span>
    );
  }
}
