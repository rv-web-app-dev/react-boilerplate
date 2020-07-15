import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(
    () => {
      axios
        .get(url)
        .then((res) => {
          setState({ ...state, data: res.data, loading: false })
        })
        .catch((error) => {
          setState({ ...state, loading: false, error })
          // reference: https://github.com/axios/axios#handling-errors
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        })
    },
    [url, setState]
  )

  return state
}

export default useFetch
