import React from 'react';
import './common.css';

//@ts-ignore
import kids_room_img from '../images/kids-room.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge';
import TemperatureChart from '../components/TemperatureChart';
import BatteryGauge from '../components/BatteryGauge';
import HumidityGauge from '../components/HumidityGauge';
import BatteryChart from '../components/BatteryChart';
import HumidityChart from '../components/HumidityChart';

import { useSelector } from 'react-redux'
import { AppState } from '../redux/store';
import { getLastReportTime } from './utils';
import { Value } from '../types/sectorDataTypes/BaseSectorData';
import { KidsRoomSector } from '../types/sectorTypes/KidsRoomSector';

function KidsRoom() {
    const [ref, { width }] = useMeasure();

    const model = useSelector<AppState, KidsRoomSector>(state => state.kidsRoomData);

    const getLastVal = (array: Value[]) => {
        if (array.length === 0)
            return 0;

        const lastIndex = array.length - 1;
        return array[lastIndex].value;
    };

    return (
        <div className="rooms">
            <img src={kids_room_img} alt="KIDS ROOM IMAGE" />
            <h1>Second Bed Room</h1>
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

export default KidsRoom
