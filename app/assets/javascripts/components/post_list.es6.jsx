class PostList extends React.Component {
  render () {
  let {posts} = this.props;

    return (
      <div className="container">
        <table className="table forum table-striped">
          <ListHeader />
          <tbody>
            {this.props.posts.map((post, index) => {
              return (<PostItem post={post} user={post.user} />);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
