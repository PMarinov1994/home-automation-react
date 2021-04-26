import React, { useState } from 'react';

import GaugeChart from '../../libs/react-gauge-chart'

interface TemperatureGaugeProps {
    temp: number;
}

function TemperatureGauge(props: TemperatureGaugeProps) {
    const { temp } = props;

    const [minValue] = useState(-20);
    const [maxValue] = useState(60);

    const calculatePercent = () => {
        const min = 0;
        const max = 100;

        const percent = (temp - minValue) * (max - min) / (maxValue - minValue) + min;
        return percent / 100;
    };

    const chartStyle = {
        width: 400,
        height: 200,
        margin: 0,
        padding: 0
      }
      

    return (
        <div style={{margin: 0, padding: 0}}>
            <h3>Temperature Gauge:</h3>
            <GaugeChart id="gauge-chart2"
                nrOfLevels={3}
                needleBaseColor={"#0"}
                formatTextValue={(() => temp + '°C')}
                textColor={"#0"}
                needleColor={"#0c5af5"}
                arcsLength={[2, 6, 6]}
                colors={["#02f2f2", "#02f24a", "#f7b100"]}
                percent={calculatePercent()}
                arcPadding={0.001}
                cornerRadius={5}
                style={chartStyle}
            />
        </div>
    )
}

export default TemperatureGauge
