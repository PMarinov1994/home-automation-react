import { INIT_DATA, APPEND_DATA } from './actionTypes.jsx';

export const initData = initialData => ({
    type: INIT_DATA,
    payload: { initialData }
});

export const appendData = toAppend => ({
    type: APPEND_DATA,
    payload: { toAppend }
});