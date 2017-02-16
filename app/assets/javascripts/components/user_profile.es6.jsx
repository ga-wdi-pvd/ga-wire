class UserProfile extends React.Component {
  render () {
    let {user} = this.props;
    return (
      <div className="user-profile">
        <h1>{user.nickname}</h1>
      </div>
    );
  }
}
