import React from 'react'
import "./traffic.scss"
import DoneIcon from '@material-ui/icons/Done';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HelpIcon from '@material-ui/icons/Help';
import { ReactComponent as Maney} from '../../assets/img/maney.svg';
import { useState, useEffect } from "react";
import axios from "axios";




export default function Traffic() {
    const [data,setData]=useState([])

    useEffect(()=>{
     const  getTraficStatic=async()=>{
            const res = await axios.get('traficdata')
            setData(res.data)
       }
       getTraficStatic()
    },[])
    

    return (
        <div className="traffic">
            {data.map(t => {
                return (
                    <div key={t.id} className="traffic-section">
                        <div className="traffic-cube">
                            <div className="traffic-info">
                                <p className="traffic-value">{t?.signups}</p>
                                <p className="title-traffic"><b className="icon-traffic"><DoneIcon /></b> SIGNUPS</p>
                            </div>

                        </div>
                        <div className="traffic-cube">
                            <div className="traffic-info">
                                <p className="traffic-value profit"> $ {t?.profit}</p>
                                <p className="title-traffic"><b className="icon-traffic"><TrendingUpIcon /> </b> PROFIT</p>
                            </div>

                        </div>
                        <div className="traffic-cube">
                            <div className="traffic-info">
                                <p className="traffic-value commisions"> $ {t?.commisions}</p>
                                <p className="title-traffic"><b className="icon-traffic">  
                                 
                               </b> <Maney className="maney-icon" />  COMMISIONS</p>
                            </div>

                        </div>
                        <div className="traffic-cube">
                            <div className="traffic-info">
                                <p className="traffic-value pending-commision">$ {t?.commisions}</p>
                                <p className="title-traffic"><b className="icon-traffic">< HelpIcon /></b>  PENDING COMMISION</p>
                            </div>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}
