class Navbar extends React.Component {
  render () {
    let links = [
      {link: '/auth/github', style: 'fa fa-sign-in'},
      {link: '/logout', style: 'fa fa-sign-out'}
    ];
    let {img, user} = this.props;
    if (user) {
      return (
        <div className="nav-bar">
          <Avatar img={img} userId={user.id}/>
          <span className="helper">
            <a href="/posts/new" className="nav-link">
              <i className="fa fa-plus"></i>
            </a>
          </span>
          <Navlink
            link={links[1].link}
            style={links[1].style}/>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
          <Navlink
            link={links[0].link}
            style={links[0].style}/>
        </div>
      );
    }

  }
}

// link={links[0].link}
// linkName={links[0].name}
