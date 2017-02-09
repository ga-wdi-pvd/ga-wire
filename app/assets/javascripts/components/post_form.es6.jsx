class PostForm extends React.Component {
  // needs a method to handle on form submits and sends data using AJAX
  // checkout this example:
  // https://github.com/bensmithett/sample-react-rails-app/tree/master/app/assets/javascripts/react_components
  render () {
    let {user, method, path} = this.props;
    return (
      <div>
        <form action={path} method={method}>
          <input type="hidden" name="post[user_id]" value={user.id}/>
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
