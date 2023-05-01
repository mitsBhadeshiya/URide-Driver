import { defUserType } from '~/types';
import { defUser } from '~/utils';
import { RESET_STATE, SET_RIDE_MODE, UPDATE_USER } from './actions';

export interface initialStateType {
    "_User": defUserType;
    "rideMode": boolean;
}

const initialState: initialStateType = {
    "_User": defUser,
    "rideMode": false
};

function AppReducer(state = initialState, action: { type: string | any; payload: any; }) {
    switch (action.type) {
        case UPDATE_USER: return { ...state, "_User": action?.payload };
        case RESET_STATE: return { ...initialState };
        case SET_RIDE_MODE: return { ...state, "rideMode": action?.payload };
        default: return state;
    }
};

export default AppReducer;