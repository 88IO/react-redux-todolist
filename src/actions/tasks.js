export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
});

export const clearTask = () => ({
  type: 'CLEAR_TASK',
});
