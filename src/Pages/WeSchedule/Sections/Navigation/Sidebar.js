import React from 'react';

export const Sidebar = (props) => {
    return (
        <nav className='navbar navbar-dark bg-primary'>
            <h2 className='navbar-brand'>WeSchedule</h2>
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
    )
}