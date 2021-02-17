import * as ActionType from "./constant";

const actDeleteUser = (id) => {
  return {
    type: ActionType.DELETE_USER,
    payload: id,
  };
};

const actEditUser = (user) => {
  return {
    type: ActionType.EDIT_USER,
    payload: user,
  };
};

const actOnSave = (user) => {
  return {
    type: ActionType.ON_SAVE,
    payload: user,
  };
};

const actSearch = (keyword) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: keyword,
  };
};

export { actDeleteUser, actEditUser, actOnSave, actSearch };
