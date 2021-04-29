import { PRESSURE_DATA_NAME } from "../constants";
import { RestApiData } from "../restAPI";
import { Value, ValueCreateNew } from "./BaseSectorData";
import { TempHumSectorData } from "./TempHumSectorData";

export class TempHumPressureSectorData extends TempHumSectorData {
    pressure: Value[];

    constructor() {
        super();
        this.pressure = [];
    }

    public parseData(data: RestApiData) {
        super.parseData(data);
        if (data.dataType === PRESSURE_DATA_NAME) {
            this.pressure.push(ValueCreateNew(data));
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