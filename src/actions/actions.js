import { NEXT_PAGE, FIRST_PAGE, LAST_PAGE, PREVIOUS_PAGE } from './actionTypes';

export const firstPageAction = (value) => ({
    type: FIRST_PAGE,
    payload: value
});

export const previousPageAction = (value) => ({
    type: PREVIOUS_PAGE,
    payload: value
});

export const nextPageAction = (value) => ({
    type: NEXT_PAGE,
    payload: value
});

export const lastPageAction = (value) => ({
    type: LAST_PAGE,
    payload: value
});