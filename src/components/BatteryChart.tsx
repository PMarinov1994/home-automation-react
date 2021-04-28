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

interface BatteryChartProps {
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

function BatteryChart(props: BatteryChartProps) {
    return (
        <div className="battery-chart">
            <h1>Battery Chart:</h1>
            <LineChart
                width={props.chartWidth}
                height={500}
                data={props.chartData} >
                <CartesianGrid stroke="#262514" />
                <XAxis dataKey="timeStamp" tick={<XAxisLineTemplate />} height={100} />
                <YAxis type="number" stroke="#0" ticks={[2.2, 2.4, 2.6, 2.8, 3.0, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5]} domain={[2.2, 4.5]} allowDataOverflow={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#15a100" strokeWidth={4} dot={false} />
            </LineChart>
        </div>
    )
}

export default BatteryChart;