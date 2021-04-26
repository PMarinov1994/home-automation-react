import React from 'react';
import './common.css';

import outside_img from '../images/outside.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge.jsx';
import TemperatureChart from '../components/TemperatureChart.jsx';
import BatteryGauge from '../components/BatteryGauge.jsx';
import HumidityGauge from '../components/HumidityGauge.jsx';
import PressureGauge from '../components/PressureGauge.jsx';
import BatteryChart from '../components/BatteryChart.jsx';
import HumidityChart from '../components/HumidityChart.jsx';
import PressureChart from '../components/PressureChart.jsx';

import { useSelector } from 'react-redux'

function Outside() {
    const [ref, { width }] = useMeasure();

    const model = useSelector(state => state.outsideData);

    const getLastVal = (array) => {
        if (array.length === 0)
            return 0;

        const lastIndex = array.length - 1;
        return array[lastIndex].value;
    };


    return (
        <div className="rooms">
            <img src={outside_img} alt="OUTSIDE ROOM IMAGE" />
            <h1>Outside</h1>

            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={getLastVal(model.data.temperature)} />
                        <BatteryGauge battery={getLastVal(model.data.battery)} />
                        <HumidityGauge humidity={getLastVal(model.data.humidity)} />
                        <PressureGauge pressure={getLastVal(model.data.pressure)} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width / 2} chartData={model.data.temperature} />
                        <PressureChart chartWidth={width / 2} chartData={model.data.pressure} />
                        <BatteryChart chartWidth={width / 2} chartData={model.data.battery} />
                        <HumidityChart chartWidth={width / 2} chartData={model.data.humidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Outside
