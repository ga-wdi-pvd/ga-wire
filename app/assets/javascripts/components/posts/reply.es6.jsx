class Reply extends React.Component {
  render () {
    let href=`${this.props.reply_url}`
    return (
      <span><a href={href} data-parent-id={this.props.parent_id} className="reply"><i className="fa fa-reply"></i>reply</a></span>

    ); 
  }
}

