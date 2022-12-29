import { useContext } from 'react';
import { StoreCtx } from '../contexts/Store';

const useStore = () => useContext(StoreCtx);

export default useStore;
