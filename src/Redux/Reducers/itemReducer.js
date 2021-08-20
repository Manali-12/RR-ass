import { ActionTypes } from "../Constants/actionType"

const initialState = {
    Items: [],
}

export const itemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            return { ...state, Items: payload };
        default:
            return state;
    }
}