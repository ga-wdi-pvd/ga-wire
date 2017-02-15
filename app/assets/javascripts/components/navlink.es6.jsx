class Navlink extends React.Component {
  render () {
    let {link, style} = this.props;
    return (
      <span className="helper">
        <a className="nav-link" href={link}>
          <i className={style}></i>
        </a>
      </span>
    );
  }
}
