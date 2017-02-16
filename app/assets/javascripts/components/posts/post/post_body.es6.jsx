class PostBody extends React.Component {
  render () {
    let {post} = this.props;
    let reply_url = `/posts/${this.props.post.id}/comments/new`
    return (
      <div className="post-body">
        {post.body}

        <div><Reply reply_url={reply_url} /></div>
      </div>
    );
  }
}
