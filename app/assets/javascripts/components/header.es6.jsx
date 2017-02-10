class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    console.log(img);
    return (
      <div className="header">
        <img src={img} alt="logo"/>
        <h1>GA Wire</h1>
        <Navbar />
        <Avatar img={user.image_url}/>
      </div>
    );
  }
}
