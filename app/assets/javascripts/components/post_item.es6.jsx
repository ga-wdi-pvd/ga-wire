class PostItem extends React.Component {
  render () {
    let {post, user} = this.props;
    let cts = this.props.post.created_at;
    let cdate = (new Date(cts)).toString();
    return (
      <tr>
        <td>
          <h4><a href={`/posts/${post.id}`}>{post.title}</a></h4>
        </td>
        <td class="cell-stat text-center hidden-xs hidden-sm"><a href="#">{user.nickname}</a></td>
        <td class="cell-stat text-center hidden-xs hidden-sm">{cdate}</td>
      </tr>
    );
  }
}
