import { getDefaultPoints } from './../selectors/index';
import { put, takeEvery, select } from "redux-saga/effects";
import { keySuccessPressed, keyFailPressed, removeArrowActive, removekeySuccessPressed, removeLive } from "redux/actions";
import { getActiveArrows, getSuccessArrows, getPointStats, getErorrStats } from "redux/selectors";

export function* handleKeyPressed({ payload }) {
    try {
        let activeKey = payload.key;
        let activeArrows = yield select(getActiveArrows)
        let successArrows = yield select(getSuccessArrows)

        if (activeArrows[0] != activeKey) {
            throw new Error(1)
        }

        if (activeArrows.length > successArrows.length) {
            yield put(keySuccessPressed(activeArrows[0]))
        }

    } catch (error) {
        yield put(keyFailPressed(Number(error.message)))
    }
}

export function* watchWinSaga() {
    let point = yield select(getPointStats)
    let defaultPoints = yield select(getDefaultPoints)

    if (point == defaultPoints) {
        yield put(removeArrowActive())
        yield put(removekeySuccessPressed())
    }
}

export function* watchFailSaga() {
    let error = yield select(getErorrStats)
    let activeArrows = yield select(getActiveArrows)
    let successArrows = yield select(getSuccessArrows)
    let defaultPoints = yield select(getDefaultPoints)

    if((activeArrows.length - successArrows.length) > defaultPoints){
        yield put(removeArrowActive())
        yield put(removekeySuccessPressed())
        yield put(removeLive())
    }

    if (error == defaultPoints) {
        yield put(removeArrowActive())
        yield put(removekeySuccessPressed())
        yield put(removeLive())
    }
}

export function* watchKeyPressedSaga() {
    yield takeEvery('KEY_PRESSED', handleKeyPressed)
    yield takeEvery('ADD_ARROW_ACTIVE', watchWinSaga)
    yield takeEvery('ADD_ARROW_ACTIVE', watchFailSaga)
}

export default function* rootSaga() {
    yield watchKeyPressedSaga()
}
