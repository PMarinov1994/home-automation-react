import React from 'react';
import './common.css';

import bed_room_img from '../images/bed-room.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge.jsx';
import TemperatureChart from '../components/TemperatureChart.jsx';
import BatteryGauge from '../components/BatteryGauge.jsx';
import HumidityGauge from '../components/HumidityGauge.jsx';
import BatteryChart from '../components/BatteryChart.jsx';
import HumidityChart from '../components/HumidityChart.jsx';

import { useSelector } from 'react-redux'

function BedRoom() {
    const [ref, { width }] = useMeasure();

    const dataTemp = useSelector(state => state.temp);
    const dataBattery = useSelector(state => state.battery);
    const dataHumidity = useSelector(state => state.humidity);

    return (
        <div className="rooms">
            <img src={bed_room_img} alt="BED ROOM IMAGE" />
            <h1>Bed Room</h1>

            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={2} />
                        <BatteryGauge battery={3.3} />
                        <HumidityGauge humidity={34} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width} chartData={dataTemp} />
                        <BatteryChart chartWidth={width / 2} chartData={dataBattery} />
                        <HumidityChart chartWidth={width / 2} chartData={dataHumidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BedRoom
