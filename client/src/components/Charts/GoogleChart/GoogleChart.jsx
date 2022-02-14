import React from 'react';
import "./googleChart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CSSTransition } from "react-transition-group";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { customModalStyle } from '../../../assets/customs/customModal';
import Modal from 'react-modal';

export default function GoogleChart() {

    const [data, setData] = useState([])
    const [openMenu, setOpenMenu] = useState(false)
    const [states, setOpenStates] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const statist = []

    useEffect(() => {
        const getUserStatic = async () => {
            const res = await axios.get('chartdatagoogle')
            setData(res.data)
        }
        getUserStatic()
    }, [])
    data.map(d => {
        return statist.push(d[1].toString())
    })
    const newstate = statist.splice(1)

    return (
        <div className="google-chart">
            <Modal
                isOpen={openModal}
                onRequestClose={openModal ? false : null}
                style={customModalStyle} >
                <div className="modal_div">
                    <Chart
                        height={"500px"}
                        chartType="GeoChart"
                        data={data}
                        mapsApiKey="AIzaSyA8h-Ko5_CQPiDM_mr831N3kcOvWH5er5w"
                        rootProps={{ "data-testid": "1" }}
                    />
                    <CancelPresentationIcon onClick={() => setOpenModal(!openModal)} className="close-icon" />
                </div>

            </Modal>
            <div className="chart-title-section">
                <h3 className="chart-title">Geografic Data </h3>
                <span className="toggle-piechart">Last Week
                    <ExpandMoreIcon className="arrow-down" style={{ transform: openMenu ? "rotate(180deg)" : null }} onClick={() => setOpenMenu(!openMenu)} />
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
            <Chart
                
                width={"100%"}
                height={"150px"}
                chartType="GeoChart"
                data={data}
                mapsApiKey="AIzaSyA8h-Ko5_CQPiDM_mr831N3kcOvWH5er5w"
                rootProps={{ "data-testid": "1" }}
            />
            <div className="google-chart-info">
                <span className="signups-info-span">
                    Affilate Sign Ups<ExpandMoreIcon className="arrow-down" style={{ transform:states ? "rotate(90deg)" : null }}  onClick={() => setOpenStates(!states)} />
                </span> 
                <CSSTransition in={!states} timeout={500} classNames="submenuTransition" unmountOnExit >
                    <ul onClick={() => setOpenModal(!openModal)} className="google-chart-ul">
                        <li className="google-char-li">1. Unidet states  <b> {newstate[0]}</b> </li>
                        <li className="google-char-li">2. China <b>{newstate[1]}</b> </li>
                        <li className="google-char-li">3. United Kingdom <b>{newstate[2]} </b></li>
                    </ul>
                </CSSTransition>
            </div>
        </div>
    )
}

