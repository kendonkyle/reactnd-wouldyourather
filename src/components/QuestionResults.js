import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import OptionSummary from './OptionSummary';
import ErrorPage from './ErrorPage';
import PropTypes from 'prop-types';

const styles = theme => ({
  card: {
    display: "flex",
  },
  cardHeader: {
    "background-color": "#80808040",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.unit * 2,
    "padding-left": theme.spacing.unit * 3
  },
  textlines: {
    padding: theme.spacing.unit * 2
  },

  avatar: {
    width: 80,
    height: 80,
    margin: theme.spacing.unit * 2,
    "margin-top": theme.spacing.unit * 4,
    "background-color": "#ddd"
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
});

const QuestionResults = props => {

  const { classes, author, question, authedUser } = props;

  if (question === null) {
    return <ErrorPage />
  }
  const total = question.optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <Card>
      <CardHeader title={author.name + " asks"} />
      <div className={classes.card}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} className={classes.details}>
            <Avatar
              className={classes.avatar}
              alt={author.name}
              src={author.avatarURL}
            />
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <CardContent className={classes.details}>
              <Typography variant="title" className={classes.headline}>
                Results
                </Typography>
              <OptionSummary option={question.optionOne} total={total} authedUser={authedUser} />
              <OptionSummary option={question.optionTwo} total={total} authedUser={authedUser} />
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

QuestionResults.PropTypes = {
  authedUser: PropTypes.object.isRequired
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  if (typeof question === "undefined") {
    return {
      question: null,
      author: null,
      authedUser: users[authedUser]
    };
  }
  return {
    question: question,
    author: users[question.author],
    authedUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionResults));