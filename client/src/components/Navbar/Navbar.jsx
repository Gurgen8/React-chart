import React, { useState } from 'react'
import "./navbar.scss"
import Toggle from "../../assets/img/toggle.png"
import Flag from "../../assets/img/flag.png"
import People from "../../assets/img/people.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { CSSTransition } from "react-transition-group";
import Modal from 'react-modal';
import { customModalStyle } from '../../assets/customs/customModal';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';


export default function Navbar() {

    const [openMenu, setOpenMunu] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const openClick = () => {
        setOpenMunu(!openMenu)
    }
    
    return (
        <div className="navbar">
            <Modal
                isOpen={openModal}
                onRequestClose={openModal ? false : null}
                style={customModalStyle} >
            <div className="modal_div">
             <div className="modal-root">
               <img className="modal-img" src={People} alt="avatar-user"/>
               <h4> Max</h4>
            </div>
            <CancelPresentationIcon onClick={() => setOpenModal(!openModal)} className="close-icon" />
            </div>
            </Modal>
            <div className="nav-toogle">
            <img className="navbar-menu-toggle" src={Toggle} alt="toggle" />
            </div>
            <div className="navbar-right">
            <div className="nav-flag">
            <img className="flag-img" src={Flag} alt="flag" />
            </div>
            <div className="user-container">
            <img onClick={()=>setOpenModal(!openModal)} src={People} alt="flag" />
            <div className="user-desc">
            <span className="status">Hello, Max!</span><br />
            <span className="login-info">Last, login!{new Date().toLocaleString()}</span>
            </div>
            <div className="icon-menu">
            <ArrowDropDownIcon className="arrow-down" style={{ transform: openMenu?"rotate(180deg)": null }} onClick={openClick} />
            <CSSTransition in={openMenu} timeout={500} classNames="submenuTransition" unmountOnExit >
            <div className="likelist">
            <div className="submenu-navbar">
            <ul className="submenu-ul">
            <li className="submenu-list">Refresh <HistoryIcon /></li>
            <li className="submenu-list">Settings <SettingsApplicationsIcon /></li>
            <li className="submenu-list">Logout <ExitToAppIcon /> </li>
            </ul>
            </div>

            </div>
            </CSSTransition>
            </div>
            </div>

            </div>

        </div>
    )
}
