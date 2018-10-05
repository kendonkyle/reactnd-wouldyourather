import React from 'react'
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { styles } from '../styles/basestyle';
import PropTypes from 'prop-types';

const UserSummary = props => {

  const { user, classes } = props;

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={user.name}></CardHeader>
      <Grid container>
        <Grid item xs={4} sm={4} md={4} className={classes.details}>
          <Avatar
            className={classes.avatar}
            alt={user.name}
            src={user.avatarURL}
          />
        </Grid>
        <Grid item xs={5} sm={5} md={5}>
          <CardContent className={classes.details}>
            <Typography variant="headline" className={classes.headline}>
              Questions Answered: {Object.keys(user.answers).length}
            </Typography>
            <Typography variant="headline" className={classes.headline}>
              Questions Created: {user.questions.length}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Paper variant="raised" className={classes.scoreSection}>
            <div>
              <Typography variant="headline" align="center">
                Score
                </Typography>
            </div>
            <hr></hr>
            <div className={classes.score}>
              <Typography variant="display1" align="center">
                {user.questions.length + Object.keys(user.answers).length}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
};

UserSummary.PropTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(withStyles(styles)(UserSummary));