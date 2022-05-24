import React from 'react';

export const Sidebar = (props) => {
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <h2 className="navbar-brand">WeSchedule</h2>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                    {props.link}
                </li>
                <li className='nav-item'>
                    {props.link2}
                </li>
                <li className='nav-item'>
                    {props.link3}
                </li>
            </ul>
        </nav>
    )
}