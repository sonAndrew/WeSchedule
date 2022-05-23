import React from 'react';

export const Sidebar = (props) => {
    return (
        <div className='container-fluid'>
            <h2>WeSchedule</h2>
            <nav className='navbar'>
                <ul>
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
        </div>
    )
}