class PostList extends React.Component {
  render () {
    return (
      <div className="container">
        <a className="new-button" href="/posts/new">&#43; New Post</a>
        <ListHeader />
        <hr />
        {this.props.posts.map((post, index) => {
          return (<PostItem post={post}/>);
        })}
      </div>
    );
  }
}
