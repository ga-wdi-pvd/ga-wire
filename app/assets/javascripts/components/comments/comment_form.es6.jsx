class CommentForm extends React.Component {
  // needs a method to handle on form submits and sends data using AJAX
  // checkout this example:
  // https://github.com/bensmithett/sample-react-rails-app/tree/master/app/assets/javascripts/react_components
  render () {
    let {user, post_id, method, path} = this.props;
    return (
      <div className="container new-post">
        <h1>Create A New Comment</h1>
        <hr/>
        <form action={path} method={method}>
          <input type="hidden" name="comment[user_id]" value={user.id}/>

          <input type="hidden" name="comment[post_id]" value={post_id}/>
          <textarea name="comment[text]" /><br/>
          <input type="submit" value="&#43; Create Comment" placeholder="Write your comment here.."/>
          <a href="/">Cancel</a>
        </form>
      </div>
    );
  }
}
