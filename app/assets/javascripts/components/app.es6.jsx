class App extends React.Component {
  render () {
    let {user} = this.props;
    return (
      <div>
        <a href="/auth/github">Login/Signup</a>
        <h1>{user.nickname}</h1>
        <img src={user.image_url}/>
      </div>
    );
  }
}
