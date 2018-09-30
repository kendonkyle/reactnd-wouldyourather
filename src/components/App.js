import React, { Component } from 'react';
import NavBar from './NavBar';
import CreateQuestion from './CreateQuestion';
import Login from './Login';
import Question from './Question';
import { Grid, withStyles } from '@material-ui/core';
import QuestionList from './QuestionList';
import ListContainer from './ListContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 6
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <ListContainer />
        {/* <QuestionList /> */}
        {/* <Login /> */}
        {/* <CreateQuestion /> */}
        {/* <Grid container className={classes.root} alignItems="center" justify="center">
          <Grid item xs={12} sm={10} md={6}>
          <Question />
          </Grid>
        </Grid> */}

      </div>
    );
  }
}

export default withStyles(styles)(App);
