import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { handleSaveAnswer } from '../actions/questions';
import ErrorPage from './ErrorPage';
import PropTypes from 'prop-types';

const styles = theme =>({
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

class AnswerQuestion extends Component {
    state = {
      value: "",
    };

    handleAnswerSubmit = (event) => {
      event.preventDefault();
      const answer = this.state.value;
      if ( answer === "") { return }
      const { dispatch, id } = this.props;
      dispatch(handleSaveAnswer(id, answer));
    };

    handleRadioClick = event => {
      event.preventDefault();
      this.setState({ value: event.target.value });
    };

    render() {

        const { classes, question, author } = this.props;
        if(question === null) {
          return <ErrorPage />;
        }

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
                      Would you rather...
                    </Typography>
                    <form className={classes.form} required onSubmit={this.handleAnswerSubmit}>
                    <RadioGroup
                      aria-label="Would you rather ..."
                      name="rather"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleRadioClick}>
                    <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                    </RadioGroup>
                    <Button variant="outlined" color="secondary" type="submit" >
                      Answer Question
                    </Button>
                    </form>
                </CardContent>
                </Grid>
                </Grid>
                </div>
            </Card>
        );
    };
}

AnswerQuestion.PropTypes = {
  authedUser: PropTypes.object.isRequired
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    const question = questions[id];
    if( typeof question === "undefined" )  {
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

export default connect(mapStateToProps)(withStyles(styles)(AnswerQuestion));