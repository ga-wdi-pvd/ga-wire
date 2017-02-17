class Navlink extends React.Component {
  render () {
    let {link, style} = this.props;
    return (
        <a className="nav-link" href="/auth/github">
          <h4><i className="fa fa-sign-in"> Login/Signup</i></h4>
        </a>
    );
  }
}
