class PostList extends React.Component {
  render () {
    return (
      <div>
        {this.props.posts.map((post, index) => {
          return (<PostItem post={post}/>);
        })}
      </div>
    );
  }
}
