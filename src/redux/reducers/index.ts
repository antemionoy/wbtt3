import { initState } from './../../types/initState';

const initialState: initState = {
    arrowsActive: [],
    keysSuccessPressed: [],
    defaultPoints: 3,
    lives: 3,
    points: 0,
    error: 0
}

const KeyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_ARROW_ACTIVE':
            state = {
                ...state,
                arrowsActive: [action.payload.key, ...state.arrowsActive]
            }
            break;
        case 'KEY_SUCCESS_PRESSED':
            state = {
                ...state,
                keysSuccessPressed: [action?.payload.key, ...state.keysSuccessPressed],
                points: state.points + 1
            }
            break;
        case 'KEY_FAIL_PRESSED':
            state = {
                ...state,
                error: state.error + action?.payload.error,
            }
            break;
        case 'REMOVE_ARROW_ACTIVE':
            state = {
                ...state,
                arrowsActive: [],
                points: 0,
                error: 0
            }
            break;
        case 'REMOVE_KEY_SUCCESS_PRESSED':
            state = {
                ...state,
                keysSuccessPressed: [],
                points: 0,
                error: 0
            }
            break;
        case 'REMOVE_LIVE':
            state = {
                ...state,
                lives: state.lives - 1
            }
            break;
        default:
            state = {
                ...state
            }
            break;
    }
    return state;
}

export default KeyReducer