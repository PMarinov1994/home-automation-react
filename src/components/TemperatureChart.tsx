import React from 'react'
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    Legend
} from "recharts";
import { formateDate, Value } from '../types/sectorDataTypes/BaseSectorData';
import { XAxisLineTemplateProps } from '../types/XAxisLineTemplateTypes';

function XAxisLineTemplate(props: XAxisLineTemplateProps) {
    const { x, y, payload, tickFormatter } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" transform="rotate(-50)">
                {tickFormatter !== undefined ? tickFormatter(payload?.value) : payload?.value}
            </text>
        </g>
    )
}

export interface TemperatureCharChild {
    data: Value[];
    name: string;
    color: string;
};

export interface TemperatureChartProps {
    chartWidth: number;
    chartBackgroundColor?: string | undefined;
    chartData?: Value[];
    children?: TemperatureCharChild[];
    height?: number;
}

function TemperatureChart(props: TemperatureChartProps) {
    const backgroundColor = ('chartBackgroundColor' in props) ? props.chartBackgroundColor : '';

    const createSingleLine = () => {
        return <Line type="monotone" dataKey="value" stroke="#a10018" strokeWidth={4} dot={false} />
    }

    const createMultipleLines = (names: TemperatureCharChild[]) => {
        return names.map((s, index) => {
            return <Line
                type="monotone"
                data={s.data}
                dataKey='value'
                key={s.name}
                name={s.name}
                stroke={s.color}
                strokeWidth={4}
                dot={false}
            />
        });
    }

    return (
        <div className="temp-chart">
            <h1>Temperature Chart:</h1>
            <LineChart
                style={{ backgroundColor: backgroundColor }}
                width={props.chartWidth}
                height={props.height === undefined ? 500 : props.height}
                data={props.chartData} >
                <CartesianGrid stroke="#262514" />
                <YAxis type="number" stroke="#0" ticks={[-15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45]} domain={[-15, 45]} allowDataOverflow={false} />
                <XAxis tickFormatter={(v: number, i) => formateDate(v)} dataKey="time" type="number" tick={<XAxisLineTemplate />} height={100} allowDuplicatedCategory={false} domain={['dataMin', 'dataMax']} />
                <Tooltip labelFormatter={(l: number) => formateDate(l)} formatter={(v: any) => `${v}°C`} />
                {props.children !== undefined ?
                    [createMultipleLines(props.children), <Legend key="x-legend" verticalAlign="top" height={36} />] :
                    createSingleLine()}
            </LineChart>
        </div>
    )
}

export default TemperatureChart;
