import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

class PlainRedux extends Component {
  render () {
    return (
      <Fragment>
        <div className='App'>
          <div className='Age-label'>your age: <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
        <hr/>
        <button onClick={this.props.onCreatePolicy}>Create Policy</button>
        <div>
          {this.props.insurance ? (
            <div>
              <p>Id:${this.props.insurance.id}</p>
              <p>Name:${this.props.insurance.name}</p>
              <p>Amount: ${this.props.insurance.amount}</p>
            </div>
          ) : (
            <div>No policies found!!</div>
          )}
        </div>
        <hr/>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age.age,
    insurance: state.insurance
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
    onCreatePolicy: () =>
      dispatch({
        type: 'CREATE_POLICY',
        body: { id: Math.floor(Math.random() * 100), name: 'Rewards Plus Vehicle Insurance', amount: '$100' }
      })
  }
}

export default connect(mapStateToProps, mapDispachToProps)(PlainRedux)
