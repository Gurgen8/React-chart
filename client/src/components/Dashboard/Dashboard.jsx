import React, { useState } from 'react'
import "./dashboard.scss"
import FavoriteIcon from '@material-ui/icons/Favorite';



export default function DashBoard() {

    const [like, setLike] = useState(false)
    const liked = () => {
        setLike(!like)
    }
    return (
        <div className="dashboard">
            <div className="container-root">
                <div className="title">
                    <h4 className="title-dashboard">Dashboard</h4>
                </div>
                <div className="liked">
                    <span className="like-span"><FavoriteIcon style={{ color: like ? "red" : null }} onClick={liked} className="heart-icon" />  ADD THIS PAGE TO FAVORITES</span>
                </div>
            </div>

        </div>
    )
}

