class PostHeader extends React.Component {
  render () {
    let {post, user} = this.props;
    return (
      <div className="post-header">
        <h1>{post.title}</h1>
        <span>
          <small>by: {user.nickname}</small>
          <img className="avatar-list" src={user.image_url}/>
        </span>
      </div>
    );
  }
}
