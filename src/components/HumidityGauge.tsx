import React from 'react';
import GaugeChart from '../../libs/react-gauge-chart'

interface HumidityGaugeProps {
    humidity: number;
};

function HumidityGauge(props: HumidityGaugeProps) {
    const { humidity } = props;

    const chartStyle = {
        width: 400,
        height: 200,
        margin: 0,
        padding: 0
    }


    return (
        <div style={{ margin: 0, padding: 0 }}>
            <h3>Humidity Gauge:</h3>
            <GaugeChart id="humidity-gauge-chart2"
                nrOfLevels={4}
                needleBaseColor={"#0"}
                textColor={"#0"}
                needleColor={"#0c5af5"}
                arcsLength={[2, 3, 4, 2]}
                colors={["#ff5d3d", "#ffa21f", "#33ff41", "#199fff"]}
                percent={humidity / 100}
                arcPadding={0.001}
                cornerRadius={5}
                style={chartStyle}
            />
        </div>
    )
}

export default HumidityGauge
