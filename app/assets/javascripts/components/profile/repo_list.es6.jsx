class RepoList extends React.Component {
  render () {
    let {repos} = this.props;
    return (
      <div className="repo-list">
        {this.props.repos.map((repo, index) => {
          return (<RepoCard repo={repo}/>);
        })}
      </div>
    );
  }
}
