import React from 'react'
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line
} from "recharts";
import { Value } from '../types/sectorDataTypes/BaseSectorData';
import { XAxisLineTemplateProps } from '../types/XAxisLineTemplateTypes';

interface HumidityChartProps {
    chartWidth: number;
    chartData: Value[];
    info?: string;
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

function HumidityChart(props: HumidityChartProps) {
    return (
        <div className="humidity-chart">
            <h1>Humidity Chart{props.info !== undefined ? ` ${props.info}` : ''}:</h1>
            <LineChart
                width={props.chartWidth}
                height={500}
                data={props.chartData} >
                <CartesianGrid stroke="#262514" />
                <XAxis dataKey="timeStamp" tick={<XAxisLineTemplate />} height={100} />
                <YAxis type="number" stroke="#0" ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} domain={[0, 100]} allowDataOverflow={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0066a1" strokeWidth={4} dot={false} />
            </LineChart>
        </div>
    )
}

export default HumidityChart;