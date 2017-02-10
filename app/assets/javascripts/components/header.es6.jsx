class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    console.log(img);
    return (
      <div>
        <img src={img} alt="logo"/>
        <h1>GA Wire</h1>
        <Navbar />
        <h1>{user.nickname}</h1>
        <img src={user.image_url}/>
      </div>
    );
  }
}
