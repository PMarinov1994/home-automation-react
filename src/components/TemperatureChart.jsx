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


function XAxisLineTemplate(props) {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" transform="rotate(-50)">
                {payload.value}
            </text>
        </g>
    )
}

function TemperatureChart(props) {
    const backgroundColor = ('chartBackgroundColor' in props) ? props.chartBackgroundColor : '';

    const createSingleLine = () => {
        return <Line type="monotone" dataKey="temp" stroke="#a10018" strokeWidth={4} />
    }

    const createMultipleLines = (names) => {
        return names.map((n) => {
            return <Line type="monotone" dataKey={n.name} stroke={n.color} strokeWidth={4} />
        });
    }
    return (
        <div className="temp-chart">
            <h1>Temperature Chart:</h1>
            <LineChart
                style={{backgroundColor: backgroundColor}}
                width={props.chartWidth}
                height={500}
                data={props.chartData} >
                <CartesianGrid stroke="#262514" />
                <XAxis dataKey="name" tick={<XAxisLineTemplate />} height={100} />
                <YAxis type="number" stroke="#0" ticks={[-15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45]} domain={[-15, 45]} allowDataOverflow="false" />
                <Tooltip />
                {'children' in props ?
                    [createMultipleLines(props.children), <Legend verticalAlign="top" height={36} />] :
                    createSingleLine()}
            </LineChart>
        </div>
    )
}

export default TemperatureChart;