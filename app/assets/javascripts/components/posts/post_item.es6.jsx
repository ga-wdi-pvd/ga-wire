class PostItem extends React.Component {
  render () {
    let {post,user} = this.props;
    let cts = this.props.post.created_at;
    let cdate = (new Date(cts)).toDateString();
    return (
      <tr>
        <td>
          <h5><a href={`/posts/${post.id}`}>{post.title}</a></h5>
        </td>
        <td class="col-md-2">
          <a href="#">
            <img className="avatar-list" src={user.image_url}/>
          </a>
        </td>
        <td class=" col-md-3">{cdate}</td>
      </tr>
    );
  }
}