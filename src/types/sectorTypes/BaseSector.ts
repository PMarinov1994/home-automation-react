import { KIDS_ROOM_SECTOR_NAME, BED_ROOM_SECTOR_NAME, LIVING_ROOM_SECTOR_NAME, OUTSIDE_SECTOR_NAME, GARDEN_0_SECTOR_NAME } from "../constants";
import { RestApiData } from "../restAPI";
import { BaseSectorData } from "../sectorDataTypes/BaseSectorData";
import { GardenHumSectorData } from "../sectorDataTypes/GardenHumSectorData";
import { TempHumPressureSectorData } from "../sectorDataTypes/TempHumPressureSectorData";
import { TempHumSectorData } from "../sectorDataTypes/TempHumSectorData";

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
        this.getData().parseData(apiData);
    }
};