import { BED_ROOM_SECTOR_NAME, KIDS_ROOM_SECTOR_NAME, LIVING_ROOM_SECTOR_NAME, OUTSIDE_SECTOR_NAME } from "./constants";
import { RestApiData } from "./restAPI";
import { BaseSectorData, TempHumPressureSectorData, TempHumSectorData } from "./sectorDataTypes";

export abstract class Sector {
    sector: string;

    constructor(name: string) {
        this.sector = name;
    }

    public abstract clone(): Sector;
    public abstract getData(): BaseSectorData;

    public pushDataArray(apiData: RestApiData[]) {
        const sortedRestApiData = apiData
            .filter((value: RestApiData) => value.sector == this.sector)
            .sort((a: RestApiData, b: RestApiData) => a.timeStamp - b.timeStamp);

        sortedRestApiData.forEach(d => {
            this.pushData(d);
        });
    }

    public pushData(apiData: RestApiData) {
        switch (this.sector) {
            case KIDS_ROOM_SECTOR_NAME:
            case BED_ROOM_SECTOR_NAME:
            case LIVING_ROOM_SECTOR_NAME:
                {
                    const data: TempHumSectorData = this.getData() as TempHumSectorData;
                    data.parseData(apiData);
                }
                break;

            case OUTSIDE_SECTOR_NAME:
                {
                    const data: TempHumPressureSectorData = this.getData() as TempHumPressureSectorData;
                    data.parseData(apiData);
                }
                break;
        }
    }
};

export class LivingRoomSector extends Sector {
    data: TempHumSectorData;

    constructor(name: string) {
        super(name);
        this.data = new TempHumSectorData();
    }

    public getData(): TempHumSectorData {
        return this.data;
    }

    public clone(): Sector {
        const newObj = new LivingRoomSector(this.sector)
        newObj.data = this.getData().clone();
        return newObj;
    }
};

export class BedRoomSector extends Sector {
    data: TempHumSectorData;

    constructor(name: string) {
        super(name);
        this.data = new TempHumSectorData();
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

export class OutsideSector extends Sector {
    data: TempHumPressureSectorData;

    constructor(name: string) {
        super(name);
        this.data = new TempHumPressureSectorData();
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
