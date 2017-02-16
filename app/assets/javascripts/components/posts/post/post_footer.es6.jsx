class PostFooter extends React.Component {
  render () {
    return (
      <div className="post-footer">
        <div classname="post-comments">
          <Comments comments={this.props.post.comments}/>
        </div>

      </div>

    );
  }
}
