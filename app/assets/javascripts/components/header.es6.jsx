class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    return (
      <div className="header container-fluid">
        <a href="/">
          <HeaderLogo img={img}/>
          <Navbar img={user.image_url}/>
        </a>
      </div>
    );
  }
}
