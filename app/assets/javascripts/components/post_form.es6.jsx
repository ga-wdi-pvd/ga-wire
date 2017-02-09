class PostForm extends React.Component {
  render () {
    return (
      <div>
        <form action="/posts" method="POST">
          <input type="hidden" name="post[user_id]" value="1"/>
          <label>Title of your post:</label><br/>
          <input type="text" name="post[title]"/><br/>
          <label>What would you like to write?</label><br/>
          <textarea name="post[body]" /><br/>
          <input type="submit" value="Submit Post"/>
        </form>
      </div>
    );
  }
}
