class Navbar extends React.Component {
  render () {
    let links = [
      {link: '/auth/github', name: 'Signup/Login'},
      {link: '/logout', name: 'Logout'}
    ];
    let {img} = this.props;
    if (img) {
      return (
        <div className="nav-bar">
          <Avatar img={img}/>
          <Navlink
            link={links[1].link}
            linkName={links[1].name}/>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
          <Navlink
            link={links[0].link}
            linkName={links[0].name}/>
        </div>
      );
    }

  }
}

// link={links[0].link}
// linkName={links[0].name}
