import { GardenHumSectorData } from "../sectorDataTypes/GardenHumSectorData";
import { Sector } from "./BaseSector";

export class GardenZero extends Sector {
    data: GardenHumSectorData;

    constructor(name: string) {
        super(name);
        this.data = new GardenHumSectorData();
    }

    public createNew(): Sector {
        return new GardenZero(this.sector);
    }

    public getData(): GardenHumSectorData {
        return this.data;
    }

    public clone(): Sector {
        const newObj = new GardenZero(this.sector)
        newObj.data = this.getData().clone();
        return newObj;
    }
};