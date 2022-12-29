import React from 'react';
import useStore from './hooks/useStore';

const CustomCounter: React.FC = () => {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const { state, dispatch } = useStore();
	return (
		<div>
			<p>Counter At: {state?.count || 0}</p>
			<button
				type='button'
				onClick={() => dispatch({ type: 'increment', payload: 1 })}
			>
				Count {state?.count || 0}
			</button>
			{/* <button
				type='button'
				onClick={() => dispatch({ type: 'decrement', payload: 1 })}
			>
				Minus
			</button> */}
		</div>
	);
};

export default CustomCounter;
