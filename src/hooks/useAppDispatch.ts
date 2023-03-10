import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store/configureStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
