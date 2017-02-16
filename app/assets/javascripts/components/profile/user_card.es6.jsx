class UserCard extends React.Component {
  render () {
    let {user} = this.props;
    return (
      <span className="user-card">
        <a target="_blank" href={user.url}>
          <h4>{user.login}</h4>
        </a>
      </span>
    );
  }
}
//Bootstrap has cards maybe use that
