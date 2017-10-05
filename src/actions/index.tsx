import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface RehydrateAction {
    // TODO why can't the imported REHYDRATE be used here?
    type: 'persist/REHYDRATE';
    payload: any;
}

export type Actions = IncrementEnthusiasm | DecrementEnthusiasm | RehydrateAction;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
