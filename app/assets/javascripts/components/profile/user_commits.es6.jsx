class UserCommits extends React.Component {
  render () {
    let {commits} = this.props;
    return (
      <div className="user-commits">
        <h4>Commit History</h4>
        <ul>
          <li>Current streak: {commits.current_streak}</li>
          <li>Longest streak: {commits.longest_streak}</li>
          <li>Daily commits: {commits.daily_commits}</li>
          <li>Total commits: {commits.total_commits}</li>
        </ul>
      </div>
    );
  }
}
