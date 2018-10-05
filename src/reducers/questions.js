import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.answer.id]: {
          ...state[action.answer.id],
          [action.answer.answer]: {
            ...state[action.answer.id][action.answer.answer],
            votes: state[action.answer.id][action.answer.answer].votes.concat([action.answer.authedUser])
          }
        }
      };
    default:
      return state;
  }
}