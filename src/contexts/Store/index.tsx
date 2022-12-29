import React, { FC, ReactNode, createContext, useReducer } from 'react';
import reducer from './reducer';
import { ActionTypes } from './types';

export const initialState = { count: 0 };

export const StoreCtx = createContext<{
	state: typeof initialState | null;
	dispatch: ({ type, payload }: ActionTypes) => void;
}>({ state: initialState, dispatch: () => null });

const Store: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoreCtx.Provider value={{ state, dispatch }}>
			{children}
		</StoreCtx.Provider>
	);
};

export default Store;
