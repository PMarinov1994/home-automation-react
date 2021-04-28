import { INIT_DATA, APPEND_DATA } from './actionTypes';
import * as constants from '../types/constants';
import { IAppendDataAction, IBaseAction, IInitDataAction } from './actions';
import { BedRoomSector } from '../types/sectorTypes/BedRoomSector';
import { KidsRoomSector } from '../types/sectorTypes/KidsRoomSector';
import { LivingRoomSector } from '../types/sectorTypes/LivingRoomSector';
import { OutsideSector } from '../types/sectorTypes/OutsideSector';
import { Sector } from '../types/sectorTypes/BaseSector';
import { GardenZero } from '../types/sectorTypes/GardenZeroSector';

export function livingRoomData(state = new LivingRoomSector(constants.LIVING_ROOM_SECTOR_NAME), action: IBaseAction) {
    return handleData(state, action);
}

export function bedRoomData(state = new BedRoomSector(constants.BED_ROOM_SECTOR_NAME), action: IBaseAction) {
    return handleData(state, action);
}

export function kidsRoomData(state = new KidsRoomSector(constants.KIDS_ROOM_SECTOR_NAME), action: IBaseAction) {
    return handleData(state, action);
}

export function outsideData(state = new OutsideSector(constants.OUTSIDE_SECTOR_NAME), action: IBaseAction) {
    return handleData(state, action);
}

export function gardenZeroData(state = new GardenZero(constants.GARDEN_0_SECTOR_NAME), action: IBaseAction) {
    return handleData(state, action);
}

const handleData = (state: Sector, action: IBaseAction) => {
    switch (action.type) {
        case INIT_DATA:
            {
                const actionType: IInitDataAction = action as IInitDataAction;

                const newState: Sector = state.clone();
                newState.pushDataArray(actionType.payload);
                console.log(newState);
                return newState;
            }

        case APPEND_DATA:
            {
                const actionType: IAppendDataAction = action as IAppendDataAction;
                if (state.sector !== actionType.payload.sector)
                    return state;

                const newState: Sector = state.clone();
                newState.pushData(actionType.payload);
                return newState;
            }
        default:
            return state;
    }
};