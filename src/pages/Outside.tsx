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
import { calculateWidth, getLastReportTime } from './utils';
import { Value } from '../types/sectorDataTypes/BaseSectorData';
import { OutsideSector } from '../types/sectorTypes/OutsideSector';
import { GardenZero } from '../types/sectorTypes/GardenZeroSector';

function Outside() {
    const [ref, { width }] = useMeasure();

    const outsideData = useSelector<AppState, OutsideSector>(state => state.outsideData);
    const gardenModel = useSelector<AppState, GardenZero>(state => state.gardenZeroData);

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
            <h2>Last Report: {getLastReportTime(outsideData)}</h2>

            {/*@ts-ignore for the ref attribute*/}
            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={getLastVal(outsideData.getData().temperature)} />
                        <BatteryGauge battery={getLastVal(outsideData.getData().battery)} />
                        <HumidityGauge humidity={getLastVal(outsideData.getData().humidity)} />
                        <PressureGauge pressure={getLastVal(outsideData.getData().pressure)} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={calculateWidth(width)} chartData={outsideData.getData().temperature} />
                        <PressureChart chartWidth={calculateWidth(width)} chartData={outsideData.getData().pressure} />
                        <BatteryChart chartWidth={calculateWidth(width)} chartData={outsideData.getData().battery} />
                        <HumidityChart chartWidth={calculateWidth(width)} chartData={outsideData.getData().humidity} />
                    </ul>

                    <h1>GARDEN</h1>
                    <h2>Last Report: {getLastReportTime(gardenModel)}</h2>
                    <ul className="control-items">
                        <HumidityGauge humidity={getLastVal(gardenModel.getData().singlePlantHum)} info="Single Plant (A1)" />
                        <HumidityGauge humidity={getLastVal(gardenModel.getData().doublePlantHum)} info="Double Plant (A0)" />
                        <BatteryGauge battery={getLastVal(gardenModel.getData().battery)} />
                    </ul>

                    <ul className="control-items">
                        <HumidityChart chartWidth={calculateWidth(width)} chartData={gardenModel.getData().singlePlantHum} info="Single Plant (A1)" />
                        <HumidityChart chartWidth={calculateWidth(width)} chartData={gardenModel.getData().doublePlantHum} info="Double Plant (A0)" />
                        <BatteryChart chartWidth={width} chartData={gardenModel.getData().battery} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Outside
