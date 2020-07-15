const insuranceReducer = (state = {}, action) => {
  // {id, name, amount}
  if (action.type === 'CREATE_POLICY') {
    const { id, name, amount } = action.body
    return { ...state, id, name, amount }
  }

  // {id, amount, balance}
  if (action.type === 'CREATE_CLAIM') {
    const { id, amount } = action.body
    const balance = state.balance - action.body.amount
    return { ...state, id, amount, balance }
  }

  if (action.type === 'DELETE_POLICY') {
    // const {id} = action.body
    return { ...state }
  }

  return { ...state }
}

export default insuranceReducer
