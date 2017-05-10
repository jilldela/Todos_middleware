import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import { fetchTodos, createTodo } from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveErrors: (error) => dispatch(receiveErrors(error.responseJSON))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
