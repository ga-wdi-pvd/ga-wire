class ListHeader extends React.Component {
  render () {
    return (
      <thead>
        <tr>
          <th>
            <h3>Topic</h3>
          </th>
          <th className="cell-stat hidden-xs hidden-sm">Users</th>
          <th className="cell-stat hidden-xs hidden-sm">Date</th>
        </tr>
      </thead>
    );
  }
}
