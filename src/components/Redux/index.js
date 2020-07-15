import React, { Fragment } from 'react'
import PlainRedux from './PlainRedux'
import ReduxThunk from './ReduxThunk';
import ReduxSaga from './ReduxSaga/index';

const Redux = () => {
  return (
    <Fragment>
      <PlainRedux/>
      <ReduxThunk/>
      <ReduxSaga/>
    </Fragment>
  )
}

export default Redux
