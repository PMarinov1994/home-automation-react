import { RestApiData } from "../restAPI";
import { BaseSectorData } from "../sectorDataTypes/BaseSectorData";

export abstract class Sector {
    sector: string;

    constructor(name: string) {
        this.sector = name;
    }

    public abstract createNew(): Sector;
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