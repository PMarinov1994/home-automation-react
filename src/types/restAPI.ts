export class RestApiData {
    sector: string;
    dataType: string;
    data: number;
    timeStamp: number;

    constructor(json:any) {
        this.sector = json.sector;
        this.dataType = json.dataType;
        this.data = parseFloat(json.data);
        this.timeStamp = parseFloat(json.timeStamp);
    }

    isValid(): boolean {
        return this.sector !== undefined && typeof this.sector === 'string' &&
            this.dataType !== undefined && typeof this.dataType === 'string' &&
            this.data != undefined && typeof this.data === 'number' &&
            this.timeStamp != undefined && typeof this.timeStamp == 'number';
    }
};