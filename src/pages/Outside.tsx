import React from 'react';
import './common.css';

//@ts-ignore
import outside_img from '../images/outside.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge';
import TemperatureChart from '../components/TemperatureChart';
import BatteryGauge from '../components/BatteryGauge';
import HumidityGauge from '../components/HumidityGauge';
import PressureGauge from '../components/PressureGauge';
import BatteryChart from '../components/BatteryChart';
import HumidityChart from '../components/HumidityChart';
import PressureChart from '../components/PressureChart';

import { useSelector } from 'react-redux'
import { AppState } from '../redux/store';
import { Value } from '../types/sectorDataTypes';
import { OutsideSector } from '../types/sectorTypes';
import { getLastReportTime } from './utils';

function Outside() {
    const [ref, { width }] = useMeasure();

    const model = useSelector<AppState, OutsideSector>(state => state.outsideData);

    const getLastVal = (array: Value[]) => {
        if (array.length === 0)
            return 0;

        const lastIndex = array.length - 1;
        return array[lastIndex].value;
    };


    return (
        <div className="rooms">
            <img src={outside_img} alt="OUTSIDE ROOM IMAGE" />
            <h1>Outside</h1>
            <h2>Last Report: {getLastReportTime(model)}</h2>

            {/*@ts-ignore for the ref attribute*/}
            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={getLastVal(model.getData().temperature)} />
                        <BatteryGauge battery={getLastVal(model.getData().battery)} />
                        <HumidityGauge humidity={getLastVal(model.getData().humidity)} />
                        <PressureGauge pressure={getLastVal(model.getData().pressure)} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width / 2} chartData={model.getData().temperature} />
                        <PressureChart chartWidth={width / 2} chartData={model.getData().pressure} />
                        <BatteryChart chartWidth={width / 2} chartData={model.getData().battery} />
                        <HumidityChart chartWidth={width / 2} chartData={model.getData().humidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Outside
