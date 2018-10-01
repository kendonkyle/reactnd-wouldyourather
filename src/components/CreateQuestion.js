import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'

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