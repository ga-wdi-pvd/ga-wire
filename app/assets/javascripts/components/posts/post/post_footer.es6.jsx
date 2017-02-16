class PostFooter extends React.Component {
  renderCommentBlock(){
    if(this.props.post.comments.length > 0) {
      return (
        <div classname="post-comments">
          <Comments comments={this.props.post.comments}/>
        </div>
      )
    }   
  } 

  render () {
    return (
      <div className="post-footer">
        {this.renderCommentBlock()}
      </div>

    );
  }
}
