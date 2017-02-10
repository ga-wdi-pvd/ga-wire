class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    return (
      <div className="header container-fluid">
          <HeaderLogo className="" img={img}/>
          <Navbar img={user.image_url}/>
      </div>
    );
  }
}
