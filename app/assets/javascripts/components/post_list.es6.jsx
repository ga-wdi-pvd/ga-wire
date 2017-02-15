class PostList extends React.Component {
  render () {
    return (
      <div className="container">
        <table className="table forum table-striped">
          <a className="new-button" href="/posts/new">&#43; New Post</a>
          <ListHeader />
          <tbody>
            {this.props.posts.map((post, index) => {
              return (<PostItem post={post}/>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// <table class="table forum table-striped">
//     <thead>
//       <tr>
//         <th class="cell-stat"></th>
//         <th>
//           <h3>Important</h3>
//         </th>
//         <th class="cell-stat text-center hidden-xs hidden-sm">Topics</th>
//         <th class="cell-stat text-center hidden-xs hidden-sm">Posts</th>
//         <th class="cell-stat-2x hidden-xs hidden-sm">Last Post</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td class="text-center"><i class="fa fa-question fa-2x text-primary"></i></td>
//         <td>
//           <h4><a href="#">Frequently Asked Questions</a><br><small>Some description</small></h4>
//         </td>
//         <td class="text-center hidden-xs hidden-sm"><a href="#">9 542</a></td>
//         <td class="text-center hidden-xs hidden-sm"><a href="#">89 897</a></td>
//         <td class="hidden-xs hidden-sm">by <a href="#">John Doe</a><br><small><i class="fa fa-clock-o"></i> 3 months ago</small></td>
//       </tr>
//     </tbody>
//   </table>
