import { RestApiData } from "../restAPI";

import dateFormater from 'dateformat'
import { BATTERY_DATA_NAME } from "../constants";
const dateFormat: string = "dd-mm HH:MM";

export function formateDate(date: number):string {
    return dateFormater(date, dateFormat);
}

export class Value {
    value: number;
    timeStamp: string;

    constructor(value: number, timeStamp: string) {
        this.value = value;
        this.timeStamp = timeStamp;
    }

    clone(): Value {
        return new Value(this.value, this.timeStamp);
    }
}

export abstract class BaseSectorData {
    battery: Value[];

    constructor() {
        this.battery = [];
    }

    public parseData(data: RestApiData) {
        if (data.dataType.toLowerCase() === BATTERY_DATA_NAME) {
            this.battery.push(new Value(data.data, formateDate(data.timeStamp)));
        }
    }

    protected internalClone(to: BaseSectorData) {
        this.battery.forEach(e => {
            to.battery.push(e.clone());
        });
    }
};