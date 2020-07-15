import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getTodos } from './../../actions/getResource'

class ReduxThunk extends Component {
  render () {
    const { todos, getTodos } = this.props

    return (
      <Fragment>
        <div>
					Boilerplate code example for fetching resource from{' '}
          <a href='https://jsonplaceholder.typicode.com/todos'>JsonPlaceholder Todos</a>
          <button onClick={getTodos}>Get TODOS</button>
          <div>
						Result:
            {todos ? (
              <ol>
                {todos.map((todo) => (
                  <li key={todo.id}>
                    {todo.title} :: <b>{todo.userId}</b> ::{' '}
                    <b>{todo.completed ? 'Done' : 'In progress'}</b>
                  </li>
                ))}
              </ol>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk)
