const editHabit = (state  = {}, action) => {
    if(action.type === 'SET_EDIT_HABIT') {
        return action.payload;
    } else if(action.type === 'EDIT_ONCHANGE') {
        return {
            // spread - give me all of the object 
            ...state,
            // change this one in particular
            [action.payload.property]: action.payload.value 
        };
    } else if (action.type === 'EDIT_CLEAR') {
        return {habit: ''};
    }
    return state;
}

export default editHabit;

// const editStudent = (state  = {}, action) => {
//     if(action.type === 'SET_EDIT_STUDENT') {
//         return action.payload;
//     } else if(action.type === 'EDIT_ONCHANGE') {
//         return {
//             // spread - give me all of the object 
//             ...state,
//             // change this one in particular
//             [action.payload.property]: action.payload.value 
//         };
//     } else if (action.type === 'EDIT_CLEAR') {
//         return {github_name: ''};
//     }
//     return state;
// }