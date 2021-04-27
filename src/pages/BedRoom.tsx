import React from 'react';
import './common.css';

//@ts-ignore
import bed_room_img from '../images/bed-room.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge';
import TemperatureChart from '../components/TemperatureChart';
import BatteryGauge from '../components/BatteryGauge';
import HumidityGauge from '../components/HumidityGauge';
import BatteryChart from '../components/BatteryChart';
import HumidityChart from '../components/HumidityChart';

import { useSelector } from 'react-redux'
import { AppState } from '../redux/store';
import { Value } from '../types/sectorDataTypes';
import { BedRoomSector } from '../types/sectorTypes';
import { getLastReportTime } from './utils';

function BedRoom() {
    const [ref, { width }] = useMeasure();

    const model = useSelector<AppState, BedRoomSector>(state => state.bedRoomData);

    const getLastVal = (array: Value[]) => {
        if (array.length === 0)
            return 0;

        const lastIndex = array.length - 1;
        return array[lastIndex].value;
    };

    return (
        <div className="rooms">
            <img src={bed_room_img} alt="BED ROOM IMAGE" />
            <h1>Bed Room</h1>
            <h2>Last Report: {getLastReportTime(model)}</h2>

            {/*@ts-ignore for the ref attribute*/}
            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={getLastVal(model.getData().temperature)} />
                        <BatteryGauge battery={getLastVal(model.getData().battery)} />
                        <HumidityGauge humidity={getLastVal(model.getData().humidity)} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width} chartData={model.getData().temperature} />
                        <BatteryChart chartWidth={width / 2} chartData={model.getData().battery} />
                        <HumidityChart chartWidth={width / 2} chartData={model.getData().humidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BedRoom
