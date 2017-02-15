class PostFooter extends React.Component {
  render () {
    return (
      <div>
      <div className="post-footer">
        <span><i className="fa fa-reply"></i>reply</span>
      </div>
      <div classname="post-comments">
        <Comments comments={this.props.post.comments}/>
      </div>
      </div>

    );
  }
}
