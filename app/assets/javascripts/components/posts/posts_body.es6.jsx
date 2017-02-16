class PostsBody extends React.Component {
  render () {
    let {posts} = this.props;
    return (
      <tbody className="page">
        {this.props.posts.map((post, index) => {
          return (<PostItem post={post} user={post.user} />);
        })}
      </tbody>
    );
  }
}
