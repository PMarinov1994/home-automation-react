import React from 'react';
import './common.css';

//@ts-ignore
import home_img from '../images/home.jpg';

import TemperatureChart from '../components/TemperatureChart';

import { useMeasure } from 'react-use';
import { useSelector } from 'react-redux';

import * as constants from '../types/constants';
import { AppState } from '../redux/store';
import { OutsideSector, LivingRoomSector, BedRoomSector, KidsRoomSector } from '../types/sectorTypes';

function Home() {
    const [ref, { width }] = useMeasure();

    const outsideModel: OutsideSector = useSelector<AppState, OutsideSector>(state => state.outsideData);
    const livingRoomModel: LivingRoomSector = useSelector<AppState, LivingRoomSector>(state => state.livingRoomData);
    const bedRoomModel: BedRoomSector = useSelector<AppState, BedRoomSector>(state => state.bedRoomData);
    const kidsRoomModel: KidsRoomSector = useSelector<AppState, KidsRoomSector>(state => state.kidsRoomData);

    return (
        <div className="rooms">
            <img src={home_img} alt="HOME IMAGE" />
            <h1>HOME PAGE</h1>

            {/*@ts-ignore for the ref attribute*/}
            <div className="control-container" ref={ref}>
                <div className="control-wrapper">
                    <ul className="control-items">
                        <TemperatureChart chartWidth={width} height={950}>
                            {[
                                { name: constants.KIDS_ROOM_SECTOR_NAME, color: "#ce123b", data: kidsRoomModel.getData().temperature },
                                { name: constants.LIVING_ROOM_SECTOR_NAME, color: "#12cec5", data: livingRoomModel.getData().temperature },
                                { name: constants.OUTSIDE_SECTOR_NAME, color: "#cec212", data: outsideModel.getData().temperature },
                                { name: constants.BED_ROOM_SECTOR_NAME, color: "#8912ce", data: bedRoomModel.getData().temperature },
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

