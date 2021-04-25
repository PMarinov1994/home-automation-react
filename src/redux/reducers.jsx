import { INIT_DATA, APPEND_DATA } from './actionTypes.jsx';
import { combineReducers } from 'redux';
import * as constants from '../REST-API/constants.js';

const dateFormater = require("dateformat");
const dateFormat = "dd-mm HH:MM:ss";

const createInitState = (sectorName) => {
    return {
        sector: sectorName,
        data: {
            temp: [],
            battery: [],
            humidity: [],
            pressure: []
        }
    }
};

const parseAllData = (data, sector) => {
    const parsedData = {
        temp: [],
        battery: [],
        humidity: [],
        pressure: []
    }

    data.forEach((obj) => {
        if (obj.sector !== sector)
            return;

        parsedData[obj.dataType].push({
            value: obj.data,
            timeStamp: dateFormater(new Date(obj.timeStamp), dateFormat),
            time: obj.timeStamp
        });

        parsedData[obj.dataType].sort((a, b) => a.time - b.time);
    });

    return parsedData;
}

const appendData = (dataObj, toAppend) => {
    dataObj[toAppend.dataType].push({
        value: toAppend.data,
        timeStamp: dateFormater(new Date(toAppend.timeStamp), dateFormat),
        time: toAppend.timeStamp
    });

    dataObj[toAppend.dataType].sort((a, b) => a.time - b.time);
    return dataObj;
};

const handleData = (state, action) => {
    if (!('type' in action) || !('payload' in action))
        return state;

    switch (action.type) {
        case INIT_DATA:
            {
                const newState = JSON.parse(JSON.stringify(state));
                newState.data = parseAllData(action.payload.initialData, state.sector);
                return newState;
            }

        case APPEND_DATA:
            {
                if (state.sector !== action.payload.toAppend.sector)
                    return state;

                const newState = JSON.parse(JSON.stringify(state));
                newState.data = appendData(newState.data, action.payload.toAppend);
                return newState;
            }
        default:
            return state;
    }
};

const livingRoomData = (state = createInitState(constants.LIVING_ROOM_SECTOR_NAME), action) => {
    return handleData(state, action);
}

const bedRoomData = (state = createInitState(constants.BED_ROOM_SECTOR_NAME), action) => {
    return handleData(state, action);
}

const kidsRoomData = (state = createInitState(constants.KIDS_ROOM_SECTOR_NAME), action) => {
    return handleData(state, action);
}

const outsideData = (state = createInitState(constants.OUTSIDE_SECTOR_NAME), action) => {
    return handleData(state, action);
}

export default combineReducers({
    livingRoomData,
    bedRoomData,
    kidsRoomData,
    outsideData
});