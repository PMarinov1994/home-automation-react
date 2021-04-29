import { RestApiData } from "../restAPI";

import dateFormater from 'dateformat'
import { BATTERY_DATA_NAME } from "../constants";
const dateFormat: string = "dd-mm HH:MM";

export function formateDate(date: number): string {
    if (date === Number.POSITIVE_INFINITY ||
        date === Number.NEGATIVE_INFINITY)
        return "";

    return dateFormater(date, dateFormat);
}


export class Value {
    value: number;
    timeStamp: string;
    time: number;

    constructor(value: number, timeStamp: string, time: number) {
        this.value = value;
        this.timeStamp = timeStamp;
        this.time = time;
    }

    clone(): Value {
        return new Value(this.value, this.timeStamp, this.time);
    }
}

export function ValueCreateNew(from: RestApiData): Value {
    return new Value(from.data, formateDate(from.timeStamp), from.timeStamp);
}

export abstract class BaseSectorData {
    battery: Value[];

    constructor() {
        this.battery = [];
    }

    public parseData(data: RestApiData) {
        if (data.dataType.toLowerCase() === BATTERY_DATA_NAME) {
            this.battery.push(ValueCreateNew(data));
        }
    }

    protected internalClone(to: BaseSectorData) {
        this.battery.forEach(e => {
            to.battery.push(e.clone());
        });
    }
};