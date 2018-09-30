import React, { Component } from 'react'
import {
    Grid,
    Card,
    CardContent,
    withStyles,
    Typography,
    FormControl,
    Input,
    Button
 } from '@material-ui/core';

 import { Save as SaveIcon } from '@material-ui/icons'

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * 6
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

class CreateQuestion extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} alignItems="center" justify="center" spacing={16}>
                <Grid item xs={12} sm={8}>
                    <Card>

                        <CardContent>
                            <Typography variant="headline">
                            Create Question
                            </Typography>
                            <hr />
                            <Typography variant="body1">Complete the question</Typography>
                            <Typography variant="subheading">Would you rather ...</Typography>
                            <form>
                            <FormControl margin="normal" required fullWidth>
                                <Input id="optiononetext" name="optionOneText" autoFocus />
                            </FormControl>
                            <Typography variant="subheading">OR</Typography>
                            <FormControl margin="normal" required fullWidth>
                                <Input id="optiontwotext" name="optionTwoText" autoFocus />
                            </FormControl>
                            <Button
                                type="submit"
                                variant="raised"
                                color="primary">
                                <SaveIcon /> Save Question
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(styles)(CreateQuestion);