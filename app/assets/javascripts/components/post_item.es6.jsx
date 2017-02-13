class PostItem extends React.Component {
  render () {
    let {post, user} = this.props;
    let cts = this.props.post.created_at;
    let cdate = (new Date(cts)).toString();
    return (
      <div className="post-item">
        <a href={`/posts/${post.id}`}>
          <h4>{post.title}</h4>
        </a>
        <p>{user.nickname}</p>
        <p>{cdate}</p>
      </div>
    );
  }
}
