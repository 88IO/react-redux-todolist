const initialState = {
  uniqueId: 1,
  task: '',
  tasks: []
};

export default function tasksReducer(state=initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      console.log("uniqueId: " + state.uniqueId);
      return {
        ...state,
        task: '',
        tasks: state.tasks.concat([{id: state.uniqueId, task: action.payload.task}]),
        uniqueId: state.uniqueId + 1
      };
    case 'DELETE_TASK':
      console.log(state.tasks);
      console.log(state.uniqueId);
      return {
        tasks: state.tasks.filter((v) => v.id !== action.payload.id)
      };
    default:
      return state;
  }
}
