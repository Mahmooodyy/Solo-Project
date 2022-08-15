const addHabitReducer = (state = [], action) => {
    switch (action.type) {
        case 'POST_HABIT':
            return action.payload;
        default:
            return state;
    }
};


  // user will be on the redux state at:
  // state.user
export default addHabitReducer;