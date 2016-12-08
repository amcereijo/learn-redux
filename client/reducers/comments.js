function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
    return [ ...state, {
      user: action.author,
      text: action.comment,
    }]
    case 'REMOVE_COMMENT':
      console.log('removing comment!');
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
    default: return state;
  }
}

// a reducer takes two things
// 1. action (info about what happen)
// 2. copy of current state

function comments(state = [], action) {
  console.log(state, action);
  if(typeof action.postId !== 'undefined') {
    return {
      // current state
      ...state,
      // reducer composition
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
}
export default comments;