class App extends React.Component {
  render () {
    let {user} = this.props;
    return (
      <div>
        <Header />
        <h1>{user.nickname}</h1>
        <img src={user.image_url}/>
        <PostList />
        <Footer />
      </div>
    );
  }
}
