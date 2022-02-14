import React from 'react';
import "./lineChart.scss";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import {
  LineChart,
  Line,
  //XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function LineCharted() {

  const [data, setData] = useState([])
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const getUserStatic = async () => {
      const res = await axios.get('chartdataline')
      setData(res.data)
    }
    getUserStatic()
  }, [])



  return (
    <div className="lineChart-root">
      <div className="chart-title-section">
        <h3 className="chart-title">Medias Staat </h3>
        <span className="toggle-piechart">
          Last Week <ExpandMoreIcon style={{ transform: openMenu ? "rotate(180deg)" : null }} className="arrow-down" onClick={() => setOpenMenu(!openMenu)} />
        </span>
        <CSSTransition in={openMenu} timeout={500} classNames="submenuTransition" unmountOnExit >
          <div className="submenu-chart">
            <ul className="submenu-ul">
              <li className="submenu-list">Last Month </li>
              <li className="submenu-list">Last Year </li>
              <li className="submenu-list">Last Day  </li>
              <li className="submenu-list">Last Week  </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
      <ResponsiveContainer >
        <LineChart
          data={data}
          margin={{
            top: 15,
            right: 20,
            left: 0,
            bottom: 5,
          }}

        >
          <CartesianGrid horizontal="true" vertical="" stroke="black" />
          {/* <XAxis dataKey="name" tick={{fill:"#fff"}}/> */}
          <YAxis interval={0} tickCount={7} domain={['dataMin', 'dataMax']} tick={{ fill: "#fff" }} itemStyle={{fontFamily:"Open sans"}} />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
          <Line type="monotone" dataKey="Iphone" stroke="#fbcf71" strokeWidth="5" dot={{ fill: "#fbcf71", stroke: "#424244", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#1f7bb6", stroke: "#1f7bb6", strokeWidth: 5, r: 10 }} />
          <Line type="monotone" dataKey="samsung" stroke="#1f7bb6" strokeWidth="5" dot={{ fill: "#1f7bb6", stroke: "#424244", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#1f7bb6", stroke: "#1f7bb6", strokeWidth: 5, r: 10 }} />
          <Line type="monotone" dataKey="Nokia" stroke="#00acac" strokeWidth="5" dot={{ fill: "#00acac", stroke: "#424244", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#1f7bb6", stroke: "#1f7bb6", strokeWidth: 5, r: 10 }} />

        </LineChart>
      </ResponsiveContainer>
      <div className="lineChart-info">
        <ul className="lineChart-ul">
          <li className="lineChart-list"><div className="color-lineCharts-fildes"></div>Click</li>
          <li className="lineChart-list"><div className="color-lineCharts-fildes"></div>Page View</li>
          <li className="lineChart-list"><div className="color-lineCharts-fildes"></div>Sign ups</li>
        </ul>
      </div>

    </div>
  )
}


