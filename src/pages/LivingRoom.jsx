import React from 'react';
import './common.css';

import living_room_img from '../images/living-room.jpg';

import { useMeasure } from 'react-use'

import TemperatureGauge from '../components/TemperatureGauge.jsx';
import TemperatureChart from '../components/TemperatureChart.jsx';
import BatteryGauge from '../components/BatteryGauge.jsx';
import HumidityGauge from '../components/HumidityGauge.jsx';
import BatteryChart from '../components/BatteryChart.jsx';
import HumidityChart from '../components/HumidityChart.jsx';

import { useSelector } from 'react-redux'

function LivingRoom() {
    const [ref, { width }] = useMeasure();

    const model = useSelector(state => state.livingRoomData);

    const getLastVal = (array) => {
        if (array.length === 0)
            return 0;

        const lastIndex = array.length - 1;
        return array[lastIndex].value;
    };

    return (
        <div className="rooms">
            <img src={living_room_img} alt="LIVING ROOM IMAGE" />
            <h1>Living Room</h1>

            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureGauge temp={getLastVal(model.data.temperature)} />
                        <BatteryGauge battery={getLastVal(model.data.battery)} />
                        <HumidityGauge humidity={getLastVal(model.data.humidity)} />
                    </ul>
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width} chartData={model.data.temperature} />
                        <BatteryChart chartWidth={width / 2} chartData={model.data.battery} />
                        <HumidityChart chartWidth={width / 2} chartData={model.data.humidity} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LivingRoom


