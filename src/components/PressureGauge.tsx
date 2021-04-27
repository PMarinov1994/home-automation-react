import React from 'react';
import GaugeChart from '../../libs/react-gauge-chart'

interface PressureGaugeProps {
    pressure: number;
}

function PressureGauge(props: PressureGaugeProps) {
    const { pressure } = props;

    const calculatePercent = () => {
        const minValue = 970;
        const maxValue = 1040;

        const min = 0;
        const max = 100;

        const percent = (pressure - minValue) * (max - min) / (maxValue - minValue) + min;
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
            <h3>Pressure Gauge:</h3>
            <GaugeChart id="[ressure-gauge-chart2"
                nrOfLevels={3}
                arcsLength={[3, 5]}
                needleBaseColor={"#0"}
                formatTextValue={(() => pressure + 'hPa')}
                textColor={"#0"}
                needleColor={"#0c5af5"}
                colors={["#00a196", "#ccb100"]}
                percent={calculatePercent()}
                arcPadding={0.1}
                cornerRadius={5}
                style={chartStyle}
            />
        </div>
    )
}

export default PressureGauge
