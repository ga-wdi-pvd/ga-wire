class UserProfile extends React.Component {
  render () {
    let {user} = this.props;
    console.log(user);
    return (
      <div className="container user-profile">
        <div className="top">
          <div>
            <img src={user.user.image_url} />
            <a href={`https://www.github.com/${user.user.nickname}`}>
              <h1>{user.user.nickname}</h1>
            </a>
          </div>
          <UserCommits commits={user.commit_history}/>
        </div>
        <UserList users={user.users.followers} title="Followers"/>
        <UserList users={user.users.following} title="Following"/>
        <RepoList repos={user.repositories} />
      </div>
    );
  }
}

// this should have organizations
//This should have alink to the linkedin profile as well
