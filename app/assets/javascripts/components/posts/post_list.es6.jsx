class PostList extends React.Component {
  render () {
  let {posts} = this.props;

    return (
      <div className="container">
        <table id="post-list" className="table forum table-striped">
          <ListHeader />
          <PostsBody posts={posts}/>
        </table>
      </div>
    );
  }
}
