class UserList extends React.Component {
  render () {
    let {users} = this.props;
    return (
      <div className="users-list">
        {this.props.users.map((user, index) => {
          return (<UserCard />);
        })}
      </div>
    );
  }
}
//this will be to map through the followers and following
