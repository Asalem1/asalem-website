import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <span />
    );
  }
}
/*
<nav className="navbar navbar-toggleable-md navbar-light bg-faded navMaster">
  <Dropdown
    className="navbar-toggler navbar-toggler-right btn"
    type="button" isOpen={this.state.dropdownOpen}
    toggle={this.toggle}
  >
    <DropdownToggle>
        <span className="menu-button">
          MENU
        <span className="navbar-toggler-icon" onClick={this.toggle} />
        </span>
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem><Link className="nav-link" to="/about">ABOUT</Link></DropdownItem>
      <DropdownItem><li className="nav-item">
          <a className="nav-link" href="/#portfolio">PORTFOLIO</a>
        </li></DropdownItem>
      <DropdownItem><Link className="nav-link" to="/blog">BLOG</Link></DropdownItem>
      <DropdownItem><li className="nav-item">
          <a className="nav-link" href="/#contact">CONTACT</a>
        </li></DropdownItem>
    </DropdownMenu>
  </Dropdown>
  <Link className="navbar-brand" to="/"><strong>AS ARIEL SALEM</strong></Link>
  <div  id="navbarNavDropdown" className="navbar-collapse collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/about">ABOUT</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#portfolio">PORTFOLIO
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog">BLOG</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#contact">CONTACT
        </a>
      </li>
    </ul>
  </div>
</nav>
*/
