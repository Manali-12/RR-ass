import { ActionTypes } from "../Constants/actionType"



export const setItems = (items) => {
    return {
        type: ActionTypes.SET_ITEMS,
        payload: items,
    };
};