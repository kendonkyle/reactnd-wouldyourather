import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  progressBar: {
    height: 20,
  },
  yourAnswer: {
    "background-color": "#f500573f",
    padding: theme.spacing.unit *1,
    margin: theme.spacing.unit * 2
    
  },
  resultBackground: {
    // border: "solid 1px",
    padding: theme.spacing.unit * 1,
    margin: theme.spacing.unit * 2
  },
  badge: {

  }
});

class OptionSummary extends Component {
  render() {
    const { option, authedUser, total, classes } = this.props;
    const answer = option.votes.includes(authedUser.id);
    const optionsPercent = option.votes.length/total*100;
    return <Paper className={option.votes.includes(authedUser.id) ? classes.yourAnswer : classes.resultBackground} raised>
      {
        answer
          ? <Badge className={classes.badge} badgeContent="You" color="primary" >
            <Typography variant="headline">
              {"Would you rather " + option.text + "?"}
            </Typography>
          </Badge >
          : <Typography variant="headline">
            {"Would you rather " + option.text + "?"}
          </Typography>
      }
      <Typography variant="subheading">
        {optionsPercent}% of people votes this
                  </Typography>
      <LinearProgress className={classes.progressBar}
        static
        variant="determinate"
        value={optionsPercent}
      />
      <Typography variant="subheading">
        {option.votes.length + " votes out of " + total}
      </Typography>
    </Paper >
  }
}

export default withStyles(styles)(OptionSummary);