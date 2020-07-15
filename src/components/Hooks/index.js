import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseCallback from './UseCallback';

const Hooks = () => {
	// You CANNOT call hooks conditionally. This is because React expects the hooks to be called in an Order !!
	// If you need conditions, call the hook and add the condition inside the hook to prevent any action.
	// ref: https://reactjs.org/docs/hooks-rules.html#explanation
	/* if (true) {
    React.useState()
  } */
	return (
		<div>
			<UseState />
            <UseEffect />
            <UseCallback />
			<div>You can use Hooks inside a function only. Not within a class.</div>
		</div>
	);
};

export default Hooks;
