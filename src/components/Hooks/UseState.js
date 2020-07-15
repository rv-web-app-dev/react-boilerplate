import React, { useState } from 'react';
import useForm from './useForm';

const UseState = () => {
	let [ count, setCount ] = useState(10);
	const incrementCount = () => {
		count = count + 5; console.log(count)
		console.log('You can use the variable like any other JS variable to alter the value. However, you need the setX() to re-render the component!!')
		setCount(count + 20);
	}

	const [ count2, setCount2 ] = useState(20);
	const [ count3, setCount3 ] = useState(30);
	const [ counts, setCounts ] = useState({ count1: 40, count2: 50 });
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ values, handleChange ] = useForm({name: '', address: ''});

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={incrementCount}>+</button>
			{count} <br />
			<button onClick={() => setCount2(count2 + 1)}>+</button>
			{count2} <br />
			<button onClick={() => setCount3((currentCount) => currentCount + 1)}>+</button>
			{count3} <br />
			<button
				onClick={() => setCounts((currentState) => ({ ...currentState, count2: currentState.count2 + 5.5 }))}
			>
				++
			</button>
			/
			<button
				onClick={() =>
					setCounts((currentState) => ({ count1: currentState.count1, count2: currentState.count2 - 5.5 }))}
			>
				--
			</button>
			:
			{counts.count1} {counts.count2}
			<br />
			<form>
				<input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				<input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				<input name='name' type='text' value={values.name} onChange={handleChange} />
				<input name='address' type='address' value={values.address} onChange={handleChange} />
			</form>
			<br />
		</div>
	);
};

export default UseState;

// (currentState) => ({ ...currentState, count2: currentState.count2 + 5.50 })
// (currentState) => { ...currentState, count2: currentState.count2 + 5.50 } => doesn't work !!
