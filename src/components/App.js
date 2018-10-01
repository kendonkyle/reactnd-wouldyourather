import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CreateQuestion from './CreateQuestion';
import Login from './Login';
import Question from './Question';
// import QuestionList from './QuestionList';
// import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import ListContainer from './ListContainer';
import { handleInitialData } from '../actions/shared'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 6
  }
});



class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={Login} />
        <Route path="/create" component={CreateQuestion} />
        <Route path="/question/:id" component={Question} />
        <Route path="/questions" component={ListContainer} />
        {/* <QuestionList /> */}
        {/* <Login /> */}
        {/* <CreateQuestion /> */}
        {/* <Grid container className={classes.root} alignItems="center" justify="center">
          <Grid item xs={12} sm={10} md={6}>
          <Question />
          </Grid>
        </Grid> */}
      </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser})  {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(App));
