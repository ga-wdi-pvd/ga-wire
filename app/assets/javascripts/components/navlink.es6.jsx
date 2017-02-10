class Navlink extends React.Component {
  render () {
    let {link, linkName} = this.props;
    return (
      <a href={link}><button className="btn btn-link">{linkName}</button></a>
    );
  }
}

// <a href={link}>{linkName}</a>
