import React,{useState} from 'react';
import "./sidebar.scss";
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import User from "../../assets/img/user.png";
import B from "../../assets/img/bw.png";
import Chart from "../../assets/img/chart.png";
import Key from "../../assets/img/key.png";
import Chart2 from "../../assets/img/chart1.png";
import Bullon from "../../assets/img/bullon.png";
import Arrows from "../../assets/img/leftright.png";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


export default function Sidebar() {
    const[closeSidebar,setCloseSidebar]=useState(false)

    return (
        <div className="sidebar-root">
            <div  className={!closeSidebar?"sidebar":"closeSidebar"}>
                <div style={{display:!closeSidebar?null:"none"}} className="sidebar-center">
                    <ul className="list">
                        <li className="list-item">
                            <img className="b-icon" src={B} alt="sidebar-icon" />
                        </li>
                        <li className="list-item">
                            <img src={Chart} alt="sidebar-icon" />
                        </li>
                        <li className="list-item">
                            <img src={Key} alt="sidebar-icon" />
                        </li>
                        <li className="list-item ">
                            <img src={User} alt="sidebar-icon" />
                        </li>
                        <li className="list-item">
                            <img src={Bullon} alt="sidebar-icon" />
                        </li>
                        <li className="list-item">
                            <img src={Chart2} alt="sidebar-icon" />
                        </li>
                        <li className="list-item">
                            <img src={Arrows} alt="sidebar-icon" />
                        </li>
                        <li className="list-item">
                            <SettingsIcon />
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-item">
                            <FavoriteIcon />
                        </li>
                        <li className="list-item">
                            <QueryBuilderIcon />
                        </li>
                        <li className="list-item">
                            <VisibilityIcon />
                        </li>
                        <li style={{ color: "white", fontSize: 10, textAlign: "center" }} className="list-item">
                            #171717
                        </li>
                    </ul>

                </div>

            </div>
            <div onClick={()=>setCloseSidebar(!closeSidebar)} className="sidebar-toggle"><KeyboardArrowRightIcon /></div>
        </div>
    )

}
