import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import UserSummary from './UserSummary';

class LeaderBoard extends Component {
  render() {

    const { users } = this.props;

    return (
      <Grid container alignItems="center" justify="center" sx={12} >
        <Grid item xs={12} sm={10} md={8} >
          <Grid container alignItems="center" spacing={16} >
          {users.map((uid) => (
            <Grid item key={uid} xs={12} >
            <UserSummary id={uid} />
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

function mapStateToProps({ users }) {
  let usersArray = [];
  for (const id in users) {
    if (users.hasOwnProperty(id)) {
      usersArray.push(id);
    }
  }
  usersArray.sort((a,b) => (
    (users[b].questions.length + Object.keys(users[b].answers).length) -
    (users[a].questions.length + Object.keys(users[a].answers).length))
  );
  return {
    users: usersArray
  };
}

export default connect(mapStateToProps)(LeaderBoard);