import React, { Component } from 'react'
import {
    Card, CardContent, Typography,
    Avatar, withStyles, CardMedia, CardHeader, Button, Grid
} from '@material-ui/core';

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
    }
});

class Question extends Component {
    render() {
        const question1 = { optionOneText: "q1", optionTwoText: "q1", author: "james" };
        let thistext = question1.optionOneText.substr(0,8);
        const author = {
            id: 'sarahedo',
            name: 'Sarah Edo',
            avatarURL: 'https://avatars3.githubusercontent.com/u/3703923?s=88&v=4',
            answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        };
        const { classes, question } = this.props;

        return (
            <Card>
                <CardHeader className={classes.cardHeader} title={author.name + " asks"} />
                <div className={classes.card}>
                <Grid container>
                <Grid item xs={4}>
                <CardMedia>
                    <Avatar
                        className={classes.avatar}
                        alt={author.name}
                        src={author.avatarURL}
                    />
                </CardMedia>
                </Grid>
                <Grid item xs={6}>
                <CardContent className={classes.details}>
                    <Typography variant="headline" className={classes.headline}>
                        Would you rather
                    </Typography>
                    <Typography variant="subheading" className={classes.textlines}>
                        {'...'+question.optionOne.text.substr(0,8)+'...'}
                    </Typography>
                    <Button variant="outlined" color="secondary">
                    Answer Question
                    </Button>
                </CardContent>
                </Grid>
                </Grid>
                </div>
            </Card>
        );
    };
}

export default withStyles(styles)(Question);