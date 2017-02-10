class Navlink extends React.Component {
  render () {
    let {link, linkName} = this.props;
    return (
      <a className="nav-link" href={link}>{linkName}</a>
    );
  }
}
