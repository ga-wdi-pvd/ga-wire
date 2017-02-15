class PostBody extends React.Component {
  render () {
    let {post} = this.props;
    return (
      <div className="post-body">
        {post.body}
      </div>
    );
  }
}
