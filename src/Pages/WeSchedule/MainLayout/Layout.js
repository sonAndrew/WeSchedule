import React from 'react';

import { Outlet, Link } from 'react-router-dom'

import { Sidebar } from '../Navigation/Sidebar';

export const Layout = () => {
    return (
        <div>
            <section>
                <Sidebar 
                    link={
                        <Link className='nav-link' to="/dashboard">
                            Dashboard
                        </Link>
                    }
                    link2={
                        <Link className='nav-link' to="/overview">
                            Overview
                        </Link>
                    }
                    link3={
                        <Link className='nav-link' to="/reports">
                            Reports
                        </Link>
                    }
                />
            </section>
            <section>
                <Outlet />
            </section>
        </div>
    )
}