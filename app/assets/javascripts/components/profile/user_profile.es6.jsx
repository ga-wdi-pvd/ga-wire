class UserProfile extends React.Component {
  render () {
    let {user} = this.props;
    console.log(user);
    return (
      <div className="user-profile">
        <img src={user.user.image_url} />
        <h1>{user.user.nickname}</h1>
        <UserCommits commitHistory={user.commit_history}/>
        <RepoList repos={user.repositories} />
        <UserList users={user.users.followers} />
        <UserList users={user.users.following} />
      </div>
    );
  }
}

// this should have organizations
//This should have alink to the linkedin profile as well
