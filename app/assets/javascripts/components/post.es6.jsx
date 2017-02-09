class Post extends React.Component {
  render () {
    let {post} = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>
          {post.body}
        </p>
      </div>
    );
  }
}
