import React from 'react';
import Chart from "react-apexcharts";
import "./chart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import {options} from "../../../assets/customs/PieChartCustom";


function PieChart() {
    const [data,setData]=useState([])
    const series=[]

 useEffect(()=>{
   const  getUserStatic=async()=>{
          const res = await axios.get('chartdatapie')
          setData(res.data)
     }
     getUserStatic()
 },[])

 data.map(d=>{
   return   series.push(d.views,d.click,d.signout)
 })


    return (
        <div className="piecharts-root">
            <h3 className="chart-title">Active Medias </h3>
            <Chart
                options={options}
                type="donut"
                series={series}
                height={150}
            />
            <div className="info-chart">
                <ul className="info-chart-data">
                    <li className="info-chart-list">CTR <span>25%</span></li>
                    <li className="info-chart-list"><div className="circle circle1"></div><span className="chart-fild-span"> Total Views</span> <span>{data[0]?.views}</span></li>
                    <li className="info-chart-list"><div className="circle circle2"></div><span  className="chart-fild-span">Total Clicks </span>  <span>{data[0]?.click}</span></li>
                    <li className="info-chart-list"><div className="circle circle3"></div><span  className="chart-fild-span">Signout  </span> <span>{data[0]?.signout}</span></li>
                </ul>
            </div>
        </div>
    );
}

export default PieChart;
