import React from 'react';
import {FETCH_BLOG_DATA, FETCH_PROGRAM_DATA} from '../action/actionType';

const initialState = {
    ProgramData : [],
    BlogData : [],
}

const reducer = (state=initialState, action) => {

    // fetch the data from the api and store it in the localStorage
    switch(action.type) {
        case FETCH_PROGRAM_DATA:
            return {
                ...state,
                ProgramData: action.payload,
            };
        
        case FETCH_BLOG_DATA:
            return {
                ...state,
                BlogData: action.payload,
            }
        default:
            return state;
    }
}

export default reducer