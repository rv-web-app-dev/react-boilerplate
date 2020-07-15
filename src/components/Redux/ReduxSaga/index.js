import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { helloSagas } from './sagas'
import Counter from './Counter'
import { store } from './../../../store'

class ReduxSaga extends Component {
  render () {
    const { value, onDecrement, onIncrement, onIncrementAsync, onGetResource } = this.props

    return (
      <Fragment>
        <hr />
        <p>This is the Saga boilerplate!!</p>
        <Counter
          value={value}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onIncrementAsync={onIncrementAsync}
          onGetResource={onGetResource}
        />
        <hr />
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onIncrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
    onGetResource: () => dispatch({ type: 'GET_RESOURCE' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSaga)
