export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserQuestion(question) {
  return {
    type: USER_ADD_QUESTION,
    question,
  };
}

export function addUserAnswer(answer) {
  return {
    type: USER_ADD_ANSWER,
    answer
  };
}
