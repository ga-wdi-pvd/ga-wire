class DropdownMenu extends React.Component {
  dropdownToggleHandler() {
    $('.dropdown-toggle').dropdown();
    console.log('I worked');
  }

  render () {
    let {userId, img} = this.props;
    return (
      <div className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown">
          <Avatar onClick="dropdownToggleHandler()" img={img} />
        </a>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href={`/users/${userId}`}>
              <i className="fa fa-user-circle"></i>
              Profile
            </a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="/posts/new">
              <i className="fa fa-plus"></i>
              New Post
            </a>
          </li>
          <li className="divider"></li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="/logout">
              <i className="fa fa-sign-out"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
