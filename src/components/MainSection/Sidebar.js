import React from 'react'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';



function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )};

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img 
            src="https://lh5.googleusercontent.com/p/AF1QipP_L5I1I6hRnSORZN5X6QCDFTeVEtSnSDOxDQ_N=w432-h240-k-no" 
            alt="" />
            <Avatar src={user.photoUrl} className='sidebar_avatar' >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,590</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>2,440</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('React JS')}
            {recentItem('Node JS')}
            {recentItem('Javascript')}
            {recentItem('Python')}
            {recentItem('Mongo DB')}
        </div>
    </div>
  )
}

export default Sidebar