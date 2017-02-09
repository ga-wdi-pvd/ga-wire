class App extends React.Component {
  render () {
    let {user, posts, post} = this.props;
    return (
      <div>
        <PostForm />
        <PostList posts={posts}/>
        <Post post={post}/>
      </div>
    );
  }
}
