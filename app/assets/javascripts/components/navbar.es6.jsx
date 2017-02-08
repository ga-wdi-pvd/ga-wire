class Navbar extends React.Component {
  render () {
    let links = [
      {link: '/auth/github', name: 'Signup/Login'}
    ];
    return (
      <div>
        <Navlink />
      </div>
    );
  }
}

// link={links[0].link}
// linkName={links[0].name}
