import { saveQuestion } from "../util/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question)  {
  return {
    type: SAVE_QUESTION,
    question,
  }
}

export function handleSaveQuestion(text, replyingTo) {
  return (dispatch, getState) =>  {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    }).then((tweet)  =>  dispatch(addTweet(tweet)))
    .then(()  =>  dispatch(hideLoading()));
  }
}

export function answerQuestion(info)  {
  return {
    type: ANSWER_QUESTION,
    info,
  }
}