class Header extends React.Component {
  render () {
    let {user} = this.props;
    return (
      <div>
        <h1>GA Wire</h1>
        <Navbar />
        <h1>{user.nickname}</h1>
        <img src={user.image_url}/>
      </div>
    );
  }
}
