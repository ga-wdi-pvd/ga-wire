class Post extends React.Component {
  // method to handle the delete through ajax is needed
  // prevent from deleting the post if the current user
  // does not match the user_id of the post
  render () {
    let {post} = this.props;
    return (
      <div>
        <a href="/">&#171; Home</a>
        <h1>{post.title}</h1>
        <p>
          {post.body}
        </p>
      </div>
    );
  }
}
