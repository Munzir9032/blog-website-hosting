import React from 'react'
import './single.css'
import Sidebar from "../../compenents/sidebar/Sidebar"
import SinglePost from '../../compenents/singlePost/SinglePost'

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
