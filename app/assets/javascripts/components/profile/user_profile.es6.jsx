class UserProfile extends React.Component {
  render () {
    let {user} = this.props;
    console.log(user);
    return (
      <div className="container user-profile">
        <div id="top">
          <div>
            <img src={user.user.image_url} />
            <a href={`https://www.github.com/${user.user.nickname}`}>
              <h1>{user.user.nickname}</h1>
            </a>
          </div>
          <UserCommits commits={user.commit_history}/>
        </div>
        <RepoList repos={user.repositories} />
        <UserList users={user.users.followers} />
        <UserList users={user.users.following} />
      </div>
    );
  }
}

// this should have organizations
//This should have alink to the linkedin profile as well
