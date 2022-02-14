import React from 'react';
import LineChart from "./LineChart/LineChart";
import GoogleChart from './GoogleChart/GoogleChart';
import PieChart from "./PieChart/PieChart";
import { useEffect, useState } from "react";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import axios from "axios";
import "./allCharts.scss";
import Modal from 'react-modal';
import ListIcon from '@material-ui/icons/List';
import { customModalStyle } from '../../assets/customs/customModal';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export default function AllCharts() {
  const [data, setData] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const getUserStatic = async () => {
      const res = await axios.get('userdata')
      setData(res.data)
    }
    getUserStatic()
  }, [])



  return (
    <div className="charts-section">
      <Modal
        isOpen={openModal}
        onRequestClose={openModal ? false : null}
        style={customModalStyle} >
        <div className="modal_div">
          <div className="user-info">
             <span>Id</span>
             <span>Username</span>
             <span>Proffit($)</span>
             <span>Commision($)</span>
             <span>Views</span>
          </div>
          {data.map(d => {
            return (
              <div key={d.id} className="values">
                <span className="user-values-name">{d.id}</span>
                <span className="user-values-name">{d.userName}</span>
                <span className="user-values-name">{d.profit}</span>
                <span className="user-values-name">{d.commision}</span>
                <span className="user-values-name"><ListIcon /></span>
              </div>)

          })}
          <CancelPresentationIcon onClick={() => setOpenModal(!openModal)} className="close-icon" />
        </div>
      </Modal>
      <LineChart />
      <PieChart />
      <GoogleChart />
      <span  onClick={() => setOpenModal(!openModal)}  id="btn" href="#">Show info <ExpandLessIcon/></span>
    </div>
  )
}
