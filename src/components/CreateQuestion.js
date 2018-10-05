import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
import { handleSaveQuestion } from '../actions/questions';

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

  state = {
    optionOneText: "",
    optionTwoText: "",
    returnToList: false,
  }

  handleTextChange = event => {
    event.preventDefault();
    if (event.target.name === 'optionOneText') {
      this.setState({
        optionOneText: event.target.value
      });
    } else {
      this.setState({
        optionTwoText: event.target.value
      });
    }
  }

  saveQuestion = event => {
    event.preventDefault();
    // TODO saveQuestion const { dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;
    // const { authedUser } = getState();
    if (optionOneText.length > 1 && optionTwoText.length > 1) {
      dispatch(handleSaveQuestion(optionOneText, optionTwoText));
      this.setState({
        optionOneText: '',
        optionTwoText: '',
        returnToList: true,
      });
    }
  }

  render() {
    const { classes } = this.props;
    if (this.state.returnToList) { return <Redirect to="/" /> }
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
              <form onSubmit={this.saveQuestion}>
                <FormControl margin="normal" required fullWidth>
                  <Input id="optiononetext" name="optionOneText"
                    onChange={this.handleTextChange}
                    value={this.state.optionOneText} autoFocus />
                </FormControl>
                <Typography variant="subheading">OR</Typography>
                <FormControl margin="normal" required fullWidth>
                  <Input id="optiontwotext" name="optionTwoText"
                    onChange={this.handleTextChange}
                    value={this.state.optionTwoText} autoFocus />
                </FormControl>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                // onClick={this.saveQuestion}
                >
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(withStyles(styles)(CreateQuestion));