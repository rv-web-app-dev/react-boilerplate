import axios from 'axios'
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function * helloSagas () {
  console.log('Hello World!! This is from your Saga...')
}

function * incrementAsync () {
  // yield delay (1000)
  yield call(delay, 1000) // Using call(), the code can be tested !! (equivalent of delay (1000))
  yield put({ type: 'INCREMENT' })
}

function * watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeLatest('GET_RESOURCE', getResource)
}

function * getResource () {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  try {
    const data = yield call(axios.get, url); console.log('d', data)
    yield put({ type: 'GET_RESOURCE_SUCCESS', data })
  } catch (error) { console.log('e', error)
    yield put({ type: 'GET_RESOURCE_ERROR', error })
  }
}


export default function * rootSaga () {
  yield all([helloSagas(), watchIncrementAsync()])
}
