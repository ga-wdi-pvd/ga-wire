class PostList extends React.Component {
  render () {
  let {posts, user} = this.props;
    return (
      <div className="container">
        <table className="table forum table-striped">
          <a className="new-button" href="/posts/new">&#43; New Post</a>
          <ListHeader />
          <tbody>
            {this.props.posts.map((post, index) => {
              return (<PostItem post={post} user={user}/>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
