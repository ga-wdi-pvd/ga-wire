class Header extends React.Component {
  render () {
    let {user, img} = this.props;
    console.log(img);
    return (
      <div className="header">
        <img src={img} alt="logo"/>
        <h1>GA Wire</h1>
        <Navbar />
        <img className="avatar" src={user.image_url}/>
      </div>
    );
  }
}
