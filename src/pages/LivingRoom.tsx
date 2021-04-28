import React from 'react';
import './common.css';

//@ts-ignore
import living_room_img from '../images/living-room.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge';
import TemperatureChart from '../components/TemperatureChart';
import BatteryGauge from '../components/BatteryGauge';
import HumidityGauge from '../components/HumidityGauge';
import BatteryChart from '../components/BatteryChart';
import HumidityChart from '../components/HumidityChart';

import { useSelector } from 'react-redux'
import { AppState } from '../redux/store';
import { calculateWidth, getLastReportTime } from './utils';
import { Value } from '../types/sectorDataTypes/BaseSectorData';
import { LivingRoomSector } from '../types/sectorTypes/LivingRoomSector';

function LivingRoom() {
    const [ref, { width }] = useMeasure();

    const model = useSelector<AppState, LivingRoomSector>(state => state.livingRoomData);

    const getLastVal = (array: Value[]) => {
        if (array.length === 0)
            return 0;

        const lastIndex = array.length - 1;
        return array[lastIndex].value;
    };

    return (
        <div className="rooms">
            <img src={living_room_img} alt="LIVING ROOM IMAGE" />
            <h1>Living Room</h1>
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
                        <BatteryChart chartWidth={calculateWidth(width)} chartData={model.getData().battery} />
                        <HumidityChart chartWidth={calculateWidth(width)} chartData={model.getData().humidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LivingRoom


