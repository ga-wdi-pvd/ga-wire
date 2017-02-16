class UserList extends React.Component {
  render () {
    let {users, title} = this.props;
    return (
      <div className="users-list">
        <h3>{title}</h3>
        {this.props.users.map((user, index) => {
          return (<UserCard user={user}/>);
        })}
      </div>
    );
  }
}
//this will be to map through the followers and following
