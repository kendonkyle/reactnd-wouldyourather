import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import QuestionResults from './QuestionResults';
import AnswerQuestion from './AnswerQuestion';

class QuestionPage extends Component {
    render() {

        const { id, answered } = this.props;

        return (
          <Grid container alignItems="center" justify="center" sx={12} >
            <Grid item xs={12} sm={10} md={8} >
              {answered 
                ? <QuestionResults id={id} />
                : <AnswerQuestion id={id} />
              }
           </Grid>
          </Grid>
        );
    };
}

function mapStateToProps({ users, authedUser }, props) {
    const { id } = props.match.params;
    const autheduser = users[authedUser];
    const hasAnswered = Object.keys(autheduser.answers).includes(id);
    return {
        id: id,
        answered: hasAnswered
    }
}

export default connect(mapStateToProps)(QuestionPage);