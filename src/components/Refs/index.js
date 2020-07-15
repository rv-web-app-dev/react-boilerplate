import React, { Fragment } from 'react';
import MyComponent from './MyComponent';
import TestRefWithFC from './testRefFunctionalComponent';
import UseRefWithFC from './useRefFunctionalComponent';
import SetRefInClassViaCallback from './SetRefInClassViaCallback';
import Parent from './ParentChildRefs';

const Refs = () => {
	return (
		<Fragment>
			<MyComponent />
			<TestRefWithFC />
			<UseRefWithFC />
			<SetRefInClassViaCallback />
			<Parent />
		</Fragment>
	);
};

export default Refs;
