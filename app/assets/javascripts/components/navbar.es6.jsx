class Navbar extends React.Component {
  render () {
    let links = [
      {link: '/auth/github', name: 'Signup/Login'},
      {link: '/logout', name: 'Logout'}
    ];
    let {img} = this.props;
    if (img) {
      return (
        <div>
          <Navlink
            link={links[1].link}
            linkName={links[1].name}/>
          <Avatar className="" img={img}/>
        </div>
      );
    } else {
      return (
        <div>
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
