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

    const dataTemp = useSelector(state => state.temp);
    const dataBattery = useSelector(state => state.battery);
    const dataHumidity = useSelector(state => state.humidity);
    const dataPressure = useSelector(state => state.pressure);


    return (
        <div className="rooms">
            <img src={outside_img} alt="OUTSIDE ROOM IMAGE" />
            <h1>Outside</h1>

            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={2} />
                        <BatteryGauge battery={3.3} />
                        <HumidityGauge humidity={34} />
                        <PressureGauge pressure={1000} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width / 2} chartData={dataTemp} />
                        <PressureChart chartWidth={width / 2} chartData={dataPressure} />
                        <BatteryChart chartWidth={width / 2} chartData={dataBattery} />
                        <HumidityChart chartWidth={width / 2} chartData={dataHumidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Outside
