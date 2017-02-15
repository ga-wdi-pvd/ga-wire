class PostItem extends React.Component {
  render () {
    let {post} = this.props;
    return (
      <tr>
        <td>
          <h4><a href={`/posts/${post.id}`}>{post.title}</a></h4>
        </td>
        <td class="cell-stat text-center hidden-xs hidden-sm"><a href="#">John Doe</a></td>
        <td class="cell-stat text-center hidden-xs hidden-sm"><a href="#">12/12/2017</a></td>
      </tr>
    );
  }
}
