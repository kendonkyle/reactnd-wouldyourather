import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Question from './Question';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  internalgrid: {
    flexGrow: 1,
  },
  questionitem: {
    padding: theme.spacing.unit * 2
  }
});

const QuestionList = props => {

  const { classes, questionIds } = props;

  return (
    <Grid container className={classes.root} alignItems="center" justify="center" spacing={16} >
      <Grid item sx={12}>
        <Grid container className={classes.internalgrid} alignItems="center" justify="center" spacing={16}>
          {questionIds.map((qid) => (
            <Grid item key={qid} xs={12} sm={12} md={12}>
              <Question id={qid} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

QuestionList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  questionIds: PropTypes.array.isRequired,
};

function mapStateToProps({ questions, users, authedUser }, { answered = null }) {

  let qArr = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  if (answered !== null) {
    qArr = qArr.filter((question) => (
      answered === Object.keys(users[authedUser].answers).includes(question.id))
    );
  }

  return {
    questionIds: qArr.map(question => (question.id))
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionList));