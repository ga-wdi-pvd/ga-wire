class PostList extends React.Component {
  render () {
    return (
      <div>
        <a href="/posts/new">&#43; New Post</a>
        {this.props.posts.map((post, index) => {
          return (<PostItem post={post}/>);
        })}
      </div>
    );
  }
}
