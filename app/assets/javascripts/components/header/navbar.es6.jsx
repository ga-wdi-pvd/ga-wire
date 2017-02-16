class Navbar extends React.Component {
  render () {
    let {img, user} = this.props;
    if (user) {
      return (
        <div className="nav-bar">
          <DropdownMenu img={img} userId={user.id}/>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
          <Navlink />
        </div>
      );
    }

  }
}

// link={links[0].link}
// linkName={links[0].name}
