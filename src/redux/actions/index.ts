export const keyPressed = (value: string) => {
    return {
        type: 'KEY_PRESSED',
        payload: {
            key: value,
            pressed: false
        }
    };
};

export const keySuccessPressed = (value: string) => {
    return {
        type: 'KEY_SUCCESS_PRESSED',
        payload: {
            key: value
        }
    };
};

export const keyFailPressed = (value: string) => {
    return {
        type: 'KEY_FAIL_PRESSED',
        payload: {
            error: value
        }
    };
};

export const addArrowActive = (value: string) => {
    return {
        type: 'ADD_ARROW_ACTIVE',
        payload: {
            key: value
        }
    };
};

export const removeArrowActive = () => {
    return {
        type: 'REMOVE_ARROW_ACTIVE'
    };
};

export const removekeySuccessPressed = () => {
    return {
        type: 'REMOVE_KEY_SUCCESS_PRESSED'
    };
};

export const removeLive = () => {
    return {
        type: 'REMOVE_LIVE'
    };
};