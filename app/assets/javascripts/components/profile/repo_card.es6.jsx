class RepoCard extends React.Component {
  render () {
    let {repo} = this.props;
    return (
      <div className="repo-card card">
        <a href={repo.html_url}>
          <div className="card-block">
              <h4 className="card-title">{repo.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">last updated: {repo.updated_at}</h6>
              <p className="card-text">{repo.description}</p>
          </div>
        </a>
      </div>
    );
  }
}
//use bootstrap cards
// repo.description will get a description
// repo.created_at repo.updated_at
