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
      return {
        ...state,
        task: '',
        tasks: state.tasks.concat([{task: action.payload.task, id: state.uniqueId}]),
        uniqueId: state.uniqueId + 1
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((v) => v.id !== action.payload.id)
      };
    case 'CLEAR_TASK':
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}
