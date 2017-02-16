class PostForm extends React.Component {
  // needs a method to handle on form submits and sends data using AJAX
  // checkout this example:
  // https://github.com/bensmithett/sample-react-rails-app/tree/master/app/assets/javascripts/react_components
  render () {
    let {user, method, path} = this.props;
    return (
      <div className="container new-post">
        <h1>Create A New Post</h1>
        <hr/>
        <form action={path} method={method}>
          <input type="hidden" name="post[user_id]" value={user.id}/>
          <input type="text" name="post[title]" placeholder="Type your title here.."/><br/><br/>
          <textarea name="post[body]" /><br/>
          <input type="submit" value="&#43; Create Post" placeholder="Write your post here.."/>
          <a href="/">Cancel</a>
        </form>
      </div>
    );
  }
}
