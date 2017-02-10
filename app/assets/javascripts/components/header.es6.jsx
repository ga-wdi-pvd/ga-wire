class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    return (
      <div className="header">
        <HeaderLogo />
        <Navbar />
        <Avatar img={user.image_url}/>
      </div>
    );
  }
}
