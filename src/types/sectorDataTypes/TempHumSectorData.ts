import { HUMIDITY_DATA_NAME, TEMPERATURE_DATA_NAME } from "../constants";
import { RestApiData } from "../restAPI";
import { BaseSectorData, formateDate, Value } from "./BaseSectorData";

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
        if (data.dataType === TEMPERATURE_DATA_NAME) {
            this.temperature.push(new Value(data.data, formateDate(data.timeStamp)))
        }
        else if (data.dataType === HUMIDITY_DATA_NAME) {
            this.humidity.push(new Value(data.data, formateDate(data.timeStamp)));
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