import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { styles } from '../styles/basestyle';
import PropTypes from 'prop-types';

// class Question extends Component {
const Question = props => {

  const { classes, question, author } = props;

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={author.name + " asks"} />
      <div className={classes.card}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} className={classes.details}>
            <Avatar
              className={classes.avatar}
              alt={author.name}
              src={author.avatarURL}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <CardContent className={classes.details}>
              <Typography variant="headline" className={classes.headline}>
                Would you rather
                    </Typography>
              <Typography variant="subheading" className={classes.textlines}>
                {'...' + question.optionOne.text.substr(0, 12) + '...'}
              </Typography>
              <Button component={Link} to={"/question/" + question.id} variant="outlined" color="secondary">
                Answer Question
                    </Button>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

Question.PropTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    question: question,
    author: users[question.author],
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Question));