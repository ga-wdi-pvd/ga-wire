class ListHeader extends React.Component {
  render () {
    return (
      <thead className="list-header">
        <tr>
          <th>
            <h3>{this.props.headerName}</h3>
          </th>
          <th className="cell-stat hidden-xs hidden-sm">Users</th>
          <th className="cell-stat hidden-xs hidden-sm">Date</th>
        </tr>
      </thead>
    );
  }
}
