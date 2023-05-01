const UPDATE_USER = 'UPDATE_USER';
const RESET_STATE = 'RESET_STATE';
const SET_RIDE_MODE = 'SET_RIDE_MODE';

export type argsType = { type: string; payload?: any; };
export type argsBoolType = { type: string; payload: boolean; };

const set_User: any = (itemI: any) => (dispatch: (args: argsType) => void) => { dispatch({ type: UPDATE_USER, payload: itemI }); };
const reset_State: any = () => (dispatch: (args: argsType) => void) => { dispatch({ type: RESET_STATE }); };
const set_Ride_Mode: any = (itemI: boolean) => (dispatch: (args: argsBoolType) => void) => { dispatch({ type: SET_RIDE_MODE, payload: itemI }); };

export {
    set_User, UPDATE_USER,
    reset_State, RESET_STATE,
    set_Ride_Mode, SET_RIDE_MODE
};