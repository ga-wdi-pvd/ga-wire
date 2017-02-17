class PostHeader extends React.Component {
  renderPostTitle(){
      let post = this.props.post;
      if (post.url){
        let url = `/${post.url}`;
        return (
          <h1><a href={url}>{post.title}</a></h1>
        )
        } else {
          return (
          <h1>{post.title}</h1>
          )
        }
      }
  render () {
    let {user} = this.props;
    
    return (
      <div className="post-header">
        {this.renderPostTitle()} 
        <span>
          <small>by: {user.nickname}</small>
          <img className="avatar-list" src={user.image_url}/>
        </span>
      </div>
    );
  }
}
