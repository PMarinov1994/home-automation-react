import { Sector } from "../types/sectorTypes";

export const getLastReportTime = (model: Sector): string => {
    const { battery } = model.getData();

    const index = battery.length - 1;
    if (index < 0)
        return 'No reports yet.';

    return battery[index].timeStamp;
}