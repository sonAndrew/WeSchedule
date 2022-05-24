import React from 'react';

import { Outlet, Link } from 'react-router-dom'

import { Sidebar } from '../Navigation/Sidebar';

export const Layout = () => {
    return (
        <div>
            <section>
                <Sidebar 
                    link={
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    }
                    link2={
                        <Link to="/overview">
                            Overview
                        </Link>
                    }
                    link3={
                        <Link to="/reports">
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