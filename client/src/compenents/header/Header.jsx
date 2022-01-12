import React from 'react'
import "./header.css";
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">BE</span>
                <span className="headerTitleLg">BLOGGER</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="Loading" />
        </div>
    )
}
