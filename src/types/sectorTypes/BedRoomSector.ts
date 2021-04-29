import { TempHumSectorData } from "../sectorDataTypes/TempHumSectorData";
import { Sector } from "./BaseSector";

export class BedRoomSector extends Sector {
    data: TempHumSectorData;

    constructor(name: string) {
        super(name);
        this.data = new TempHumSectorData();
    }

    public createNew(): Sector {
        return new BedRoomSector(this.sector);
    }

    public getData(): TempHumSectorData {
        return this.data;
    }

    public clone(): Sector {
        const newObj = new BedRoomSector(this.sector)
        newObj.data = this.getData().clone();
        return newObj;
    }
};