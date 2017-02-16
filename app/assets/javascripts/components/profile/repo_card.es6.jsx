class RepoCard extends React.Component {
  render () {
    let {repo} = this.props;
    return (
      <span className="repo-card">
        <a target="_blank" href={repo.html_url}>
          <h4>{repo.name}</h4>
        </a>
      </span>
    );
  }
}
//use bootstrap cards
