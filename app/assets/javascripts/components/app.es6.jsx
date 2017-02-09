class App extends React.Component {
  render () {
    let {user, posts, post} = this.props;
    return (
      <div>
        <Header />
        <h1>{user.nickname}</h1>
        <img src={user.image_url}/>
        <PostList posts={posts}/>
        <Footer />
      </div>
    );
  }
}
