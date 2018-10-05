import { saveQuestion, saveQuestionAnswer } from "../util/api";
import { addUserQuestion, addUserAnswer } from "./users";

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
    type: ADD_QUESTION,
    question,
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) =>  {
    const { authedUser } = getState();
    return saveQuestion({ optionOneText, optionTwoText, author: authedUser }
      ).then((question)  =>  {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      });
  }
}

export function answerQuestion(answer)  {
  return {
    type: ANSWER_QUESTION,
    answer,
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) =>  {
    const { authedUser } = getState();

    return saveQuestionAnswer({ authedUser, qid, answer }
      ).then(()  =>  {
        dispatch(answerQuestion({ authedUser, id: qid, answer }));
        dispatch(addUserAnswer({ authedUser, id: qid, answer }));
      });

  }
}
