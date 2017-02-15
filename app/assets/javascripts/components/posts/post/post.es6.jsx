class Post extends React.Component {
  // method to handle the delete through ajax is needed
  // prevent from deleting the post if the current user
  // does not match the user_id of the post
  render () {
    let {post, user} = this.props;
    return (
      <div className="container post">
        <PostHeader user={user} post={post}/>
        <hr/>
        <PostBody post={post}/>
        <PostFooter />
        <hr/>
      </div>
    );
  }
}
