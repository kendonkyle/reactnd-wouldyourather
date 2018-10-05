import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { LockOutlined as LockIcon } from '@material-ui/icons';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Login extends Component {
    state = {
        selectedUser: ""
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({ selectedUser: event.target.value });
    }

    handleLogin = event => {
        // const { dispatch } = this.props;
        event.preventDefault();
        (this.state.selectedUser !== "") && this.props.dispatch(setAuthedUser(this.state.selectedUser));
    }

    render() {
        const { classes, users } = this.props;
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="headline">Sign in</Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="users">Users</InputLabel>
                            <Select
                                value={this.state.selectedUser}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'loginusers',
                                    id: 'loginuser-id',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="raised"
                            color="primary"
                            onClick={this.handleLogin}
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    };
}

function mapStateToProps({ users }) {
    let userArray = [];
    for (const userId in users) {
        if (users.hasOwnProperty(userId)) {
            userArray.push(users[userId]);
        }
    }
    return { users: userArray };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));