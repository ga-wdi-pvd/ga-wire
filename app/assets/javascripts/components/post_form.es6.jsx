class PostForm extends React.Component {
  render () {
    return (
      <div>
        <form action="/posts" method="POST">
          <input type="text" name="title"/><br>
          <input type="text" name="body"/><br>
        </form>
      </div>
    );
  }
}
