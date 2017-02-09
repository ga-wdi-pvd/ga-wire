class App extends React.Component {
  render () {
    let {user, posts, post} = this.props;
    return (
      <div>
        <PostForm />
        <Post post={post}/>
      </div>
    );
  }
}
