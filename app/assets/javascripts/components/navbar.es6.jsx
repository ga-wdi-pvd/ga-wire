class Navbar extends React.Component {
  render () {
    let links = [
      {link: '/auth/github', name: 'Signup/Login'},
      {link: '/logout', name: 'Logout'}
    ];
    return (
      <div>
        <Navlink
          link={links[0].link}
          linkName={links[0].name}/>
        <Navlink
          link={links[1].link}
          linkName={links[1].name}/>
      </div>
    );
  }
}

// link={links[0].link}
// linkName={links[0].name}
