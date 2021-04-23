import React from 'react';
import GaugeChart from 'react-gauge-chart'

function BatteryGauge(props) {
    const { battery } = props;

    const calculatePercent = () => {
        const minValue = 2.2;
        const maxValue = 4.4;

        const min = 0;
        const max = 100;

        const percent = (battery - minValue) * (max - min) / (maxValue - minValue) + min;
        return percent / 100;
    };

    const chartStyle = {
        width: 400,
        height: 200,
        margin: 0,
        padding: 0
    }


    return (
        <div style={{ margin: 0, padding: 0 }}>
            <h3>Battery Gauge:</h3>
            <GaugeChart id="battery-gauge-chart2"
                nrOfLevels={3}
                needleBaseColor={"#0"}
                formatTextValue={(value => battery + 'V')}
                textColor={"#0"}
                needleColor={"#0c5af5"}
                colors={["#f54263", "#f5c60c", "#0cf52b"]}
                percent={calculatePercent()}
                arcPadding={0.001}
                cornerRadius={5}
                style={chartStyle}
            />
        </div>
    )
}

export default BatteryGauge
