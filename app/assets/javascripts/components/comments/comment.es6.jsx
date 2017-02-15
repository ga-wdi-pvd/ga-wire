class Comment extends React.Component {
  render () {
    let {comment,user} = this.props;
    let cts = comment.created_at;
    let cdate = (new Date(cts)).toDateString();
    let children = comment.children;
    return (
      <tr>
        <td>
          <h5><a href={`/comments/${comment.id}`}>{comment.text}</a></h5>
        </td>
        <td class="col-md-2">
          <a href="#">
         {/*   <img className="avatar-list" src={user.image_url}/>*/}
          </a>
        </td>
        <td class=" col-md-3">{cdate}</td>
      </tr>

    );
  }
}

