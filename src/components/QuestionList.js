import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core';
import Question from './Question';

const styles = theme => ({
    root: {
      flexGrow: 1,
    //   marginTop: theme.spacing.unit * 1
    },
    internalgrid: {
      flexGrow: 1,
    //   marginTop: theme.spacing.unit * 1,
    //   border: 'solid black 1px',
    },
    questionitem: {
        padding: theme.spacing.unit * 2
    }
});

class QuestionList extends Component {

    render() {
        const { classes } = this.props;
        let questions = {
            "8xf0y6ziyjabvozdd253nd": {
              id: '8xf0y6ziyjabvozdd253nd',
              author: 'sarahedo',
              timestamp: 1467166872634,
              optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory',
              },
              optionTwo: {
                votes: [],
                text: 'have horrible long term memory'
              }
            },
            "6ni6ok3ym7mf1p33lnez": {
              id: '6ni6ok3ym7mf1p33lnez',
              author: 'johndoe',
              timestamp: 1468479767190,
              optionOne: {
                votes: [],
                text: 'become a superhero',
              },
              optionTwo: {
                votes: ['johndoe', 'sarahedo'],
                text: 'become a supervillian'
              }
            },
            "am8ehyc8byjqgar0jgpub9": {
              id: 'am8ehyc8byjqgar0jgpub9',
              author: 'sarahedo',
              timestamp: 1488579767190,
              optionOne: {
                votes: [],
                text: 'be telekinetic',
              },
              optionTwo: {
                votes: ['sarahedo'],
                text: 'be telepathic'
              }
            },
            "loxhs1bqm25b708cmbf3g": {
              id: 'loxhs1bqm25b708cmbf3g',
              author: 'tylermcginnis',
              timestamp: 1482579767190,
              optionOne: {
                votes: [],
                text: 'be a front-end developer',
              },
              optionTwo: {
                votes: ['sarahedo'],
                text: 'be a back-end developer'
              }
            }
        };
        let qArr = [];
        for (const key in questions) {
            if (questions.hasOwnProperty(key)) {
                // qArr.concat(questions[key]);
                qArr.push(questions[key])
            }
        }

        return (
            <Grid container className={classes.root} alignItems="center" justify="center" spacing={16} >
                {/* <Grid item key={q.id} sx={12} sm={10} md={8}></Grid> */}
                <Grid container className={classes.internalgrid} alignItems="center" justify="center" spacing={16} sx={12} sm={10} md={8}>
                {qArr.map((q) => (
                    <Grid item key={q.id} xs={12}>
                        <Question question={q} />
                   </Grid>
                ))}
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(styles)(QuestionList);