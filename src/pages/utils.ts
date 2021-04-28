import { Sector } from "../types/sectorTypes/BaseSector";


export const getLastReportTime = (model: Sector): string => {
    const { battery } = model.getData();

    const index = battery.length - 1;
    if (index < 0)
        return 'No reports yet.';

    return battery[index].timeStamp;
}

const minWidth = 960;
export const calculateWidth = (width: number): number => {
    return width >= 960 ? width / 2 : width;
}