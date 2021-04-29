import { TempHumPressureSectorData } from "../sectorDataTypes/TempHumPressureSectorData";
import { Sector } from "./BaseSector";

export class OutsideSector extends Sector {
    data: TempHumPressureSectorData;

    constructor(name: string) {
        super(name);
        this.data = new TempHumPressureSectorData();
    }

    public createNew(): Sector {
        return new OutsideSector(this.sector);
    }

    public getData(): TempHumPressureSectorData {
        return this.data;
    }

    public clone(): Sector {
        const newObj = new OutsideSector(this.sector)
        newObj.data = this.getData().clone();
        return newObj;
    }
};