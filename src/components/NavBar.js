import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AccountCircle from '@material-ui/icons/AccountCircle'

class NavBar extends Component {
    state = {
        anchorEl: null,
    };

    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event) =>  {
        this.setState({ anchorEl: null });
    };

    render() {
        let { authedUser, classes } = this.props;
        // authedUser = false;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
          <div>
            <AppBar position="static">
              <Toolbar>
              {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleMenu}>
                <MenuIcon />
              </IconButton> */}
              <Typography variant="title" color="inherit" className={classes.grow}>
                Would you Rather
              </Typography>
              <Button component={Link} to="/" color="inherit">Home</Button>
              {authedUser && <Button component={Link} to="/create" color="inherit">New Question</Button>}
              {authedUser && <Button component={Link} to="/leaderboard" color="inherit">Leader Board</Button>}
              {authedUser && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                    <Typography variant="caption" color="inherit">
                      Hello {authedUser}
                    </Typography>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
            </AppBar>
          </div>
        );
    };
}

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

function mapStateToProps({authedUser})  {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(withStyles(styles)(NavBar));