class Post extends React.Component {
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
