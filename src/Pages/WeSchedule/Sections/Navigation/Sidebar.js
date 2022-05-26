import React from 'react';

import './Sidebar.css';

export const Sidebar = (props) => {
    return (
        <nav className='navbar navbar-expand-lg bg-primary flex-column'>
            <div className='container-fluid flex-column'>
                {props.title}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto nav-container mb-2 mb-lg-0 flex-column'>
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
                </div>
            </div>
            
        </nav>
    )
}