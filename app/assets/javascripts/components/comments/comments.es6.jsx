class Comments extends React.Component {
  render () {
    return (
      <div className="comments-container">
        <table className="table forum table-striped">
          <ListHeader headerName="Comments"/>
          <tbody>
          {this.props.comments.map((comment, index) => {
            return (
              <Comment key={index} comments={comment.children} comment={comment} user={comment.user} />
            );

          })}
          </tbody>
        </table>
      </div>
  );

  }
}

