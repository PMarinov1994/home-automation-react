import React from 'react';
import './common.css';

import video from '../videos/video-2.mp4';
import TemperatureChart from '../components/TemperatureChart.jsx';

import { useMeasure } from 'react-use';
import { useSelector } from 'react-redux';

import * as constants from '../REST-API/constants.js';

function Home() {
    const [ref, { width }] = useMeasure();

    const outsideModel = useSelector(state => state.outsideData);
    const livingRoomModel = useSelector(state => state.livingRoomData);
    const bedRoomModel = useSelector(state => state.bedRoomData);
    const kidsRoomModel = useSelector(state => state.kidsRoomData);

    return (
        <div className="home">
            <video src={video} autoPlay loop muted />
            <h1>HOME PAGE</h1>

            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width} chartBackgroundColor="#ffeaa3">
                            {[
                                { name: constants.OUTSIDE_SECTOR_NAME, color: "#cec212", data: outsideModel.data.temp },
                                { name: constants.LIVING_ROOM_SECTOR_NAME, color: "#12cec5", data: livingRoomModel.data.temp },
                                { name: constants.BED_ROOM_SECTOR_NAME, color: "#8912ce", data: bedRoomModel.data.temp },
                                { name: constants.KIDS_ROOM_SECTOR_NAME, color: "#ce123b", data: kidsRoomModel.data.temp },
                            ]}
                        </TemperatureChart>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home

const dataTemp = [
    {
        name: "10.03 12:06",
        temp1: 18,
        temp2: 20,
    },
    {
        name: "12.03 12:01",
        temp1: 10,
        temp2: 30,
    },
    {
        name: "12.03 12:03",
        temp1: 30,
        temp2: 35,
    },
    {
        name: "12.01 12:00",
        temp1: 20,
        temp2: 40,
    },
    {
        name: "12.03 12:05",
        temp1: 27,
        temp2: 37,
    },
    {
        name: "12.03 12:07",
        temp1: 23,
        temp2: 33,
    },
];

