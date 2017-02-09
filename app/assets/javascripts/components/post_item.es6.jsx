class PostItem extends React.Component {
  render () {
    let {post} = this.props;
    return (
      <div>
        <a href={`/posts/${post.id}`}>
          <h4>{post.title}</h4>  
        </a>
      </div>
    );
  }
}
