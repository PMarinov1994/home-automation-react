import { RestApiData } from "./restAPI";

import dateFormater from 'dateformat'
const dateFormat: string = "dd-mm HH:MM";


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
        if (data.dataType === 'battery') {
            this.battery.push(new Value(data.data, dateFormater(data.timeStamp, dateFormat)));
        }
    }

    protected internalClone(to: BaseSectorData) {
        this.battery.forEach(e => {
            to.battery.push(e.clone());
        });
    }
};

export class TempHumSectorData extends BaseSectorData {
    humidity: Value[];
    temperature: Value[];

    constructor() {
        super();
        this.humidity = [];
        this.temperature = [];
    }

    public parseData(data: RestApiData) {
        super.parseData(data);
        if (data.dataType === 'temperature') {
            this.temperature.push(new Value(data.data, dateFormater(data.timeStamp, dateFormat)))
        }
        else if (data.dataType === 'humidity') {
            this.humidity.push(new Value(data.data, dateFormater(data.timeStamp, dateFormat)));
        }
    }

    protected internalClone(to: TempHumSectorData) {
        super.internalClone(to);

        this.humidity.forEach(e => {
            to.humidity.push(e.clone());
        });

        this.temperature.forEach(e => {
            to.temperature.push(e.clone());
        });
    }

    clone(): TempHumSectorData {
        const newObj = new TempHumSectorData;
        this.internalClone(newObj);
        
        return newObj;
    }
};

export class TempHumPressureSectorData extends TempHumSectorData {
    pressure: Value[];

    constructor() {
        super();
        this.pressure = [];
    }

    public parseData(data: RestApiData) {
        super.parseData(data);
        if (data.dataType === "pressure") {
            this.pressure.push(new Value(data.data, dateFormater(data.timeStamp, dateFormat)));
        }
    }

    protected internalClone(to: TempHumPressureSectorData) {
        super.internalClone(to);

        this.pressure.forEach(e => {
            to.pressure.push(e.clone());
        });
    }

    clone(): TempHumPressureSectorData {
        const newObj = new TempHumPressureSectorData;
        this.internalClone(newObj);
        
        return newObj;
    }
};