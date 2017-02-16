class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    return (
      <div className="header container-fluid">
        <div className="header container">
          <a href="/">
            <HeaderLogo img={img}/>
          </a>
          <Navbar img={user.image_url} user={user}/>
        </div>

      </div>
    );
  }
}
