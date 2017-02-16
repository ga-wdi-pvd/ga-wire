class Avatar extends React.Component {
  render () {
    return (
        <a href={`/users/${this.props.userId}`}>
          <img className="avatar" src={this.props.img}/>
        </a>
    );
  }
}
