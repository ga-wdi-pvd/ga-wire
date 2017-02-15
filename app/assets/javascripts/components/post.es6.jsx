class Post extends React.Component {
  // method to handle the delete through ajax is needed
  // prevent from deleting the post if the current user
  // does not match the user_id of the post
  render () {
    let {post, user} = this.props;
    return (
      <div className="container post">
        <div className="post-header">
          <h1>{post.title}</h1>
          <span>
            <small>by: {user.nickname}</small>
            <img className="avatar-list" src={user.image_url}/>
          </span>
        </div>
        <hr/>
        <div className="post-body">
          {post.body}
        </div>
      </div>
    );
  }
}
