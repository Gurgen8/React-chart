import React from 'react';
import Charts from '../Charts/AllCharts';
import DashBoard from '../Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';
import Traffic from '../Traffics/Traffic';
import ViewInfo from '../ViewInfo/ViewInfo';
import "./feed.scss";

export default function Feed() {

    return (
        <div className="column-feed">
            <Navbar />
            <DashBoard  />
            <Traffic />
            <Charts />
            <ViewInfo />
        </div>
    )
}
