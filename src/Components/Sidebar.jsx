import React from 'react';
import './Sidebar.css';
import {Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <Link to={'/'} className='a'>Company Logo</Link>
                        </li>
                        <li>
                            <Link to={'/'} className='a'>Home</Link>
                        </li>
                        <li>
                            <Link to={'/products'} className='a'>Products</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className='a'>Services</Link>
                        </li>
                        <li>
                            <Link to={'/resources'} className='a'>Resources</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className='a'>About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='a'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar