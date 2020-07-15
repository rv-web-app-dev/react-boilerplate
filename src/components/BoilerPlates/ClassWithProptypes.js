import React, { Component } from 'react'
import PropTypes from 'prop-types'
r

class ClassWithProptypes extends Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

// reference: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
ClassWithProptypes.propTypes = {
  optionalArray: PropTypes.array,
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  optionalBool: PropTypes.bool,
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
  optionalOnEvent: PropTypes.func,
  optionalMessage: PropTypes.instanceOf(Message),
  error: PropTypes.instanceOf(Error).isRequired,
  optionalNumber: PropTypes.number,
  optionalSymbol: PropTypes.symbol,
  optionalNode: PropTypes.node,
  optionalObject: PropTypes.object,
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  optionalString: PropTypes.string,
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  })

}

export default ClassWithProptypes
