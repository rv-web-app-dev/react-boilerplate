const initialState = {
  value: 0
}

const counterReducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case 'INCREMENT':
      newState.value += 1
      break

    case 'DECREMENT':
      newState.value -= 1
      break

    default : return newState
  }
  return newState
}

export default counterReducer
