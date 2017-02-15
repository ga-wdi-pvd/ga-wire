class Comments extends React.Component {
  render () {
    return (
      <div className="container">
        <table className="table forum table-striped">
          <ListHeader />
          <tbody>
          {this.props.comments.map((comment, index) => {
            return (
              <Comment comment={comment} user={comment.user} />
            );

          })}
          </tbody>
        </table>
      </div>
  );

  }
}

