import { initialState } from './index';
import { ActionTypes } from './types';

export default function reducer(
	state: typeof initialState,
	action: ActionTypes
) {
	switch (action?.type) {
		case 'increment':
			return { count: state.count < 10 ? state.count + action?.payload : 0 };
		case 'decrement':
			return { count: state.count >= 0 ? state.count - +action?.payload : 0 };

		default:
			return state;
	}
}
