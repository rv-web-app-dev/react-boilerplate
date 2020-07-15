import axios from 'axios'

export const getTodos = () => async (dispatch) => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const { data, error } = await getResource(url)

  dispatch({ type: 'GET_TODOS', data, error })
}

const getResource = async (url) => {
  try {
    const response = await axios.get(url)
    return { data: response.data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}
