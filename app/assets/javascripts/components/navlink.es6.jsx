class Navlink extends React.Component {
  render () {
    let {link, linkName} = this.props;
    return (
      <a href={link}>{linkName}</a>
    );
  }
}
