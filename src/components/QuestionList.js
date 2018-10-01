import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Question from './Question';

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

class QuestionList extends Component {

    render() {
        const { classes, questionIds } = this.props;



        return (
            <Grid container className={classes.root} alignItems="center" justify="center" spacing={16} >
                <Grid item sx={12} sm={10} md={8}>
                <Grid container className={classes.internalgrid} alignItems="center" justify="center" spacing={16}>
                {questionIds.map((qid) => (
                    <Grid item key={qid} xs={12} sm={12} md={12}>
                        <Question qid={qid} />
                   </Grid>
                ))}
                </Grid>
                </Grid>
            </Grid>
        );
    };
}

function mapStateToProps({ questions, users, authedUser }, { answered = null })  {

    let qArr = [];
    for (const key in questions) {
        if (questions.hasOwnProperty(key)) {
            qArr.push(questions[key])
            qArr.sort((a,b) => b.timestamp - a.timestamp);
        }
        if(answered !== null)   {
            qArr.filter((question) => answered === Object.keys(users[authedUser].answers).includes(question.id));
        }
    }

    return {
        questionIds: qArr.map(question => (question.id))
    }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionList));