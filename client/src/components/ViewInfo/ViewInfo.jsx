import React from 'react';
import "./viewInfo.scss";
import ListIcon from '@material-ui/icons/List';
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewInfo() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getUserStatic = async () => {
            const res = await axios.get('userdata')
            setData(res.data)
        }
        getUserStatic()
    }, [])

    return (
        <>
            <div className="view-info">
                <div className="container-info">
                    <div className="affikatres-table">
                        <div className="general-title">
                            <h2 className="info-title"> Top Affiliates</h2>
                        </div>
                        <div className="fildes">
                            <span className="user-fildes-name">Id</span>
                            <span className="user-fildes-name">Username</span>
                            <span className="user-fildes-name">Proffit($)</span>
                            <span className="user-fildes-name">Commision($)</span>
                            <span className="user-fildes-name">View</span>
                        </div>
                        <div style={{ flexDirection: "column" }} className="fildes">

                            {data.map(u => {
                                return (
                                    <div key={u.id} className="values">
                                        <span className="user-values-name">{u.id}</span>
                                        <span className="user-values-name">{u.userName}</span>
                                        <span className="user-values-name">{u.profit}</span>
                                        <span className="user-values-name">{u.commision}</span>
                                        <span className="user-values-name"><ListIcon /></span>
                                    </div>)
                            })}

                        </div>
                    </div>
                </div>
                <div className="container-info">
                    <div className="affikatres-table">
                        <div className="general-title">
                            <h2 className="info-title"> Signups</h2>
                        </div>
                        <div className="fildes">
                            <span className="user-fildes-name">Id</span>
                            <span className="user-fildes-name">Username</span>
                            <span className="user-fildes-name">Proffit($)</span>
                            <span className="user-fildes-name">Commision($)</span>
                            <span className="user-fildes-name">View</span>

                        </div>
                        <div style={{ flexDirection: "column" }} className="fildes">

                            {data.map(u => {
                                return (
                                    <div key={u.id} className="values">
                                        <span className="user-values-name">{u.id}</span>
                                        <span className="user-values-name">{u.userName}</span>
                                        <span className="user-values-name">{u.profit}</span>
                                        <span className="user-values-name">{u.commision}</span>
                                        <span className="user-values-name"><ListIcon /></span>
                                    </div>)
                            })}

                        </div>
                    </div>
                </div>
                <div className="container-info">
                    <div className="affikatres-table">
                        <div className="general-title">
                            <h2 className="info-title"> Pending Commisios</h2>
                        </div>
                        <div className="fildes">
                            <span className="user-fildes-name">Id</span>
                            <span className="user-fildes-name">Username</span>
                            <span className="user-fildes-name">Proffit($)</span>
                            <span className="user-fildes-name">Commision($)</span>
                            <span className="user-fildes-name">View</span>
                        </div>
                        <div style={{ flexDirection: "column" }} className="fildes">

                            {data.map(u => {
                                return (
                                    <div key={u.id} className="values">
                                        <span className="user-values-name">{u.id}</span>
                                        <span className="user-values-name">{u.userName}</span>
                                        <span className="user-values-name">{u.profit}</span>
                                        <span className="user-values-name">{u.commision}</span>
                                        <span className="user-values-name"><ListIcon /></span>
                                    </div>)
                            })}

                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
