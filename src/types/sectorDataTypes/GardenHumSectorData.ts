import dateFormat from "dateformat";
import { GARDEN_SINGLE_PLANT_DATA_NAME, GARDEN_DOUBLE_PLANT_DATA_NAME } from "../constants";
import { RestApiData } from "../restAPI";
import { BaseSectorData, Value, ValueCreateNew } from "./BaseSectorData";

export class GardenHumSectorData extends BaseSectorData {
    singlePlantHum: Value[];
    doublePlantHum: Value[];

    constructor() {
        super();
        this.singlePlantHum = [];
        this.doublePlantHum = [];
    }

    public parseData(data: RestApiData) {
        super.parseData(data);
        if (data.dataType === GARDEN_SINGLE_PLANT_DATA_NAME) {
            this.singlePlantHum.push(ValueCreateNew(data));
        }
        else if (data.dataType === GARDEN_DOUBLE_PLANT_DATA_NAME) {
            this.doublePlantHum.push(ValueCreateNew(data));
        }
    }

    protected internalClone(to: GardenHumSectorData) {
        super.internalClone(to);

        this.singlePlantHum.forEach(e => {
            to.singlePlantHum.push(e.clone());
        });

        this.doublePlantHum.forEach(e => {
            to.doublePlantHum.push(e.clone());
        });
    }

    clone(): GardenHumSectorData {
        const newObj = new GardenHumSectorData();
        this.internalClone(newObj);

        return newObj;
    }
}