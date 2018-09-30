import React, { Component } from 'react';
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    IconButton,
    Button,
    } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'

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
        let { auth, classes } = this.props;
        auth = true;
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
              <Button href="/" color="inherit">Home</Button>
              <Button href="/create" color="inherit">New Question</Button>
              <Button href="/leaderboard" color="inherit">Leader Board</Button>
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                    <Typography variant="caption" color="inherit">
                        Hello User
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
                    <MenuItem onClick={this.handleClose}></MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </Menu>
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

export default withStyles(styles)(NavBar);