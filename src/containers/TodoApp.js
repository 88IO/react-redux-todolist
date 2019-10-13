import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, deleteTask } from '../actions/tasks';

const mapStateToProps = ({ tasks }) => {
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

const  mapDispatchToProps = (dispatch) => {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    deleteTask(id) {
      dispatch(deleteTask(id));
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
