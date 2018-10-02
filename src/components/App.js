import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ListConainter from './ListContainer';
import CreateQuestion from './CreateQuestion';
import Login from './Login';
import QuestionPage from './QuestionPage';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import ListContainer from './ListContainer';
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div>
        <NavBar />
        {/* <Route path="/question/:id" component={QuestionPage} /> */}
        {authedUser === null ?
          <div>
          <Route path="/" component={Login} />
          </div>
        : <div>
          <Route path="/" exact component={ListConainter} />
          <Route path="/create" component={CreateQuestion} />
          <Route path="/question/:id" component={QuestionPage} />
          <Route path="/questions" component={ListContainer} />
          </div>
        }
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

export default connect(mapStateToProps)(App);
