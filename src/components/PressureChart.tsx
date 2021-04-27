import React from 'react'
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line
} from "recharts";
import { Value } from '../types/sectorDataTypes';
import { XAxisLineTemplateProps } from '../types/XAxisLineTemplateTypes';

interface PRessureChartProps {
    chartWidth: number;
    chartData: Value[];
}

function XAxisLineTemplate(props: XAxisLineTemplateProps) {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" transform="rotate(-50)">
                {payload.value}
            </text>
        </g>
    )
}

function PressureChart(props: PRessureChartProps) {
    return (
        <div className="pressure-chart">
            <h1>Pressure Chart:</h1>
            <LineChart
                width={props.chartWidth}
                height={500}
                data={props.chartData} >
                <CartesianGrid stroke="#262514" />
                <XAxis dataKey="timeStamp" tick={<XAxisLineTemplate />} height={100} />
                <YAxis type="number" stroke="#0" ticks={[970, 980, 990, 1000, 1010, 1020, 1030, 1040]} domain={[970, 1040]} allowDataOverflow={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#a16e00" strokeWidth={4} dot={false} />
            </LineChart>
        </div>
    )
}

export default PressureChart;