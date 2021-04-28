import { TempHumSectorData } from "../sectorDataTypes/TempHumSectorData";
import { Sector } from "./BaseSector";

export class KidsRoomSector extends Sector {
    data: TempHumSectorData;

    constructor(name: string) {
        super(name);
        this.data = new TempHumSectorData();
    }

    public getData(): TempHumSectorData {
        return this.data;
    }

    public clone(): Sector {
        const newObj = new KidsRoomSector(this.sector)
        newObj.data = this.getData().clone();
        return newObj;
    }
};