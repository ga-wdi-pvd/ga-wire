class PostForm extends React.Component {
  render () {
    return (
      <div>
        <form action="/posts" method="POST">
          <label>Title of your post:</label><br/>
          <input type="text" name="title"/><br/>
          <label>What would you like to write?</label><br/>
          <textarea name="body" /><br/>
          <input type="submit" value="Submit Post"/>
        </form>
      </div>
    );
  }
}
