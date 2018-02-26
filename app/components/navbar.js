import React, { Component } from 'react';
import {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem,
  Tab,
  Tabs,
} from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.scss';

const btnStyle = {
  display: 'inline-block',
  textAlign: 'center',
  width: '100%',
  height: '100%',
};

const menuItemStyle = {
  fontSize: '50px',
  letterSpacing: '1px',
  fontFamily: 'Quicksand',
  cursor: 'pointer',
  height: '100px',
  lineHeight: '100px',
};

export class NavbarClass extends Component {
  static propTypes = {
    history: PropTypes.shape.isRequired,
  };

  renderMenuBtn = props => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><Menu /></IconButton>
      }
      iconStyle={{
        width: 65,
        height: 65,
        marginLeft: -40,
      }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem
        primaryText="ABOUT"
        style={menuItemStyle}
        onClick={() => {
          window.location.href = '/#about';
        }}
      />
      <MenuItem
        primaryText="PORTFOLIO"
        style={menuItemStyle}
        onClick={() => {
          window.location.href = '/#portfolio';
        }}
      />
      <MenuItem
        primaryText="TESTIMONIALS"
        style={menuItemStyle}
        onClick={() => {
          window.location.href = '/#testimonials';
        }}
      />
      <MenuItem
        primaryText="BLOG"
        style={menuItemStyle}
        onClick={() => this.props.history.push('/blog')}
      />
      <MenuItem
        primaryText="CONTACT"
        style={menuItemStyle}
        onClick={() => {
          window.location.href = '/#contact';
        }}
      />
    </IconMenu>
  );

  render() {
    return (
      <div>
        <div className="d-none d-lg-block">
          <Tabs
            className="navbar-tabs"
          >
            <Tab
              className="nav-tab"
              buttonStyle={btnStyle}
              label={
                <Link className="nav-item" to="/">
                  AS ARIEL SALEM
                </Link>
              }
            />
            <Tab
              className="nav-tab"
              buttonStyle={btnStyle}
              label={
                <a className="nav-item" href="/#about">
                  ABOUT
                </a>
              }
            />
            <Tab
              className="nav-tab"
              buttonStyle={btnStyle}
              label={
                <a className="nav-item" href="/#portfolio">
                  PORTFOLIO
                </a>
              }
            />
            <Tab
              className="nav-tab"
              buttonStyle={btnStyle}
              label={
                <a className="nav-item" href="/#testimonials">
                  TESTIMONIALS
                </a>
              }
            />
            <Tab
              className="nav-tab"
              buttonStyle={btnStyle}
              label={
                <Link className="nav-item" to="/blog">
                  BLOG
                </Link>
              }
            />
            <Tab
              className="nav-item"
              buttonStyle={btnStyle}
              label={
                <a className="nav-item" href="/#contact">
                  CONTACT
                </a>
              }
            />
          </Tabs>
        </div>
        <div className="d-lg-none d-xl-none">
          <AppBar
            title="AS ARIEL SALEM"
            titleStyle={menuItemStyle}
            showMenuIconButton={false}
            onTitleClick={() => this.props.history.push('/')}
            iconElementRight={this.renderMenuBtn()}
            style={{
              background: 'rgba(0, 0, 0, .3)',
              position: 'fixed',
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarClass);
