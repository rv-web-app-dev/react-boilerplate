import React, { useRef } from 'react';

const UseRefWithFC = () => {
	const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus()
    }

	return (
		<div>
			Associate refs using useRef:
			<input ref={inputRef} />
			<button onClick={onClick}>Click to Edit</button>
			<button
				onClick={() => {
					inputRef.current.focus();
				}}
			>
				Click to Focus
			</button>
            <hr/>
		</div>
	);
};

export default UseRefWithFC;
