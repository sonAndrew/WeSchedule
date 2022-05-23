import React from 'react';

export const Sidebar = (props) => {
    return (
        <div>
            <h2>WeSchedule</h2>
            <nav>
                <ul>
                    <li>
                        {props.link}
                    </li>
                    <li>
                        {props.link2}
                    </li>
                    <li>
                        {props.link3}
                    </li>
                </ul>
            </nav>
        </div>
    )
}