const todosReducer = (state = {}, action) => {
  // {id, name, amount}
  if (action.type === 'GET_TODOS') {
    const { data } = action

    return { ...state, data }
  }

  return { ...state }
}

export default todosReducer
