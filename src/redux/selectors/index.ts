import { initState } from 'types/initState';

export const getActiveArrows = (state:initState) => state.arrowsActive
export const getSuccessArrows = (state:initState)  => state.keysSuccessPressed
export const getPointStats = (state:initState)  => state.points
export const getErorrStats = (state:initState)  => state.error
export const getDefaultPoints = (state:initState)  => state.defaultPoints
export const getLives = (state:initState)  => state.lives