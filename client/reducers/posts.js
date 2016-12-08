// a reducer takes two things
// 1. action (info about what happen)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes!');
      const i = action.index;
      const newState = { ...state[i] };
      newState.likes += 1;
      return [
        ...state.slice(0, i),
        newState,
        ...state.slice(i+1)
      ];
    default: return state;
  }
}

export default posts;