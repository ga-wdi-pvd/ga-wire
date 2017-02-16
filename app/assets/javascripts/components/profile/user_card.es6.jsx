class UserCard extends React.Component {
  render () {
    let {user} = this.props;
    return (
      <div className="user-card">
        <a target="_blank" href={user.url}>
          <h4>{user.login}</h4>
          <img src={user.avatar_url} />
        </a>
      </div>
    );
  }
}
//Bootstrap has cards maybe use that
